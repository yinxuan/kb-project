<template>
  <div class='tetris'>
    <div class="game">
      <div class='title'>Tetris</div>
      <div class="game-div">
        <div class="game-min">
          <div class="row" v-for="(row, i) in frame" :key="i">
            <p class="element" v-for="(col, j) in row" :key="j" :style="{ background: col.bg }"></p>
          </div>
        </div>
        <div class="right-div">
          <div class="ass">
            <div class="row" v-for="(row, i) in ass" :key="i">
              <p class="element" v-for="(col, j) in row" :key="j" :style="{ background: col.bg }"></p>
            </div>
          </div>
          <div>
            <div class="mb10">得分</div>
            <div class="data mb10">{{score}}</div>
          </div>
          <div>
            <div class="mb10">等级</div>
            <div class="data mb10">{{level}}</div>
          </div>
          <div>
            <div class="mb10">消除</div>
            <div class="data mb10">
              {{times}}
            </div>
          </div>
          <div class="play" @click="stopGame()">
            {{ stop ? '开始' : '暂停'}}
          </div>
          <div class="gift">
            <img
                v-if="isGift"
                class="gift-top"
                :src='giftImg'
                width='40'
                height='40'
            />
            <img
                class="gift-bottom"
                src='../../assets/svg/eluosi/hezi.svg'
                width='100'
                height='100'
            />
          </div>
        </div>
      </div>
      <div class="control">
        <div class="change" @click="change1()">
          <img src='../../assets/svg/eluosi/shoubing.svg' width='150' height='150' />
        </div>
        <div>
          <div class="zy">
            <div class="left" @click="moveLeft()">
              <img src='../../assets/svg/eluosi/top.svg' width='60' height='60' style="transform: rotate(-90deg)" />
            </div>
            <div class="right" @click="moveRight()">
              <img src='../../assets/svg/eluosi/top.svg' width='60' height='60' style="transform: rotate(90deg)"/>
            </div>
          </div>
          <div class="down" @click="moveDown()">
            <img src='../../assets/svg/eluosi/top.svg' width='60' height='60'  style="transform: rotate(180deg)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { color, blockMod, transition } from "@/utils/ykdata"
export default {
  data() {
    return {
      row: 20, //行
      col: 10, //列
      frame: [],//界面
      ass: [],//副屏幕
      bg: '#eee',
      block: [],//方块集合
      now: { b: 0, c: 0 },//当前方块以及其旋转角度
      next: { b: 0, c: 0 },//下一个方块以及其旋转角度
      nowBlock: [],//当前形状数据
      nextBlock: [],//下一个形状数据
      xz: 0,//当前旋转角度
      timer: '',//自动下落
      speed: 800,//速度
      score: 0,//得分
      level: 1,//等级
      times: 0,//消除次数
      stop: true,//是否停止
      removeRow: [],//消除的行记录
      giftImg: '',
      isGift: false,
      giftList: [
        require('../../assets/svg/eluosi/gift_1.svg'),
        require('../../assets/svg/eluosi/gift_2.svg'),
        require('../../assets/svg/eluosi/gift_3.svg'),
        require('../../assets/svg/eluosi/gift_4.svg'),
        require('../../assets/svg/eluosi/gift_5.svg'),
        require('../../assets/svg/eluosi/gift_6.svg'),
        require('../../assets/svg/eluosi/gift_7.svg'),
        require('../../assets/svg/eluosi/gift_8.svg'),
        require('../../assets/svg/eluosi/gift_9.svg'),
        require('../../assets/svg/eluosi/gift_10.svg'),
      ]
    }
  },
  methods: {
    //游戏框架
    gameFrame() {
      //主屏幕
      for (let i = 0; i < this.row; i++) {
        let a = [];
        for (let j = 0; j < this.col; j++) {
          let b = {
            data: 0,
            bg: this.bg,
          };
          a.push(b);
        }
        this.frame.push(a);
      }
      //副屏
      for (let i = 0; i < 4; i++) {
        let a = [];
        for (let j = 0; j < 4; j++) {
          let b = {
            data: 0,
            bg: this.bg,
          };
          a.push(b);
        }
        this.ass.push(a);
      }
      //模拟格子被占用
      // this.frame[4][4].bg = "#00aaee";
      // this.frame[4][4].data = 1;
    },
    //渲染方块
    getBlock(e) {
      this.block = blockMod(color[e]);
      console.log(this.block);
    },

    //下一个形状
    async getNext() {
      //随机获取形状
      this.next.b = Math.floor(Math.random() * this.block.length)
      this.next.c = Math.floor(Math.random() * 4);
    },
    //渲染当前形状
    init() {
      //获取到下一个形状数据
      this.now = JSON.parse(JSON.stringify(this.next));
      this.xz = this.now.c

      //当前形状数据
      this.nowBlock = JSON.parse(JSON.stringify(this.block[this.now.b]));

      //渲染形状数据
      this.renderBlock(this.nowBlock, this.frame, 1);
      //旋转
      if (this.now.c > 0) {
        for (let i = 0; i < this.now.c; i++) {
          this.change(this.nowBlock, this.frame, this.now, i);
        }
      }

      this.getNext().then(() => {
        if (this.nextBlock.site) {
          this.renderBlock(this.nextBlock, this.ass, 0);
        }
        //下一个形状
        this.nextBlock = JSON.parse(JSON.stringify(this.block[this.next.b]));
        //渲染形状数据
        this.renderBlock(this.nextBlock, this.ass, 1);
        //旋转
        if (this.next.c > 0) {
          for (let i = 0; i < this.next.c; i++) {
            this.change(this.nextBlock, this.ass, this.next, i);
          }
        }

      }
      )
    },

    //渲染形状
    //b:方块，d：位置，n:0擦除，1生成，2确定落到最下层
    renderBlock(b, d, n) {
      let c = b.site;
      if (n == 0) {
        //擦除
        for (let i = 0; i < c.length; i += 2) {
          d[c[i]][c[i + 1]].bg = this.bg;
        }
      } else if (n == 1) {
        //生成
        for (let i = 0; i < c.length; i += 2) {
          d[c[i]][c[i + 1]].bg = b.color;
        }
      } else if (n == 2) {
        //确定位置
        for (let i = 0; i < c.length; i += 2) {
          d[c[i]][c[i + 1]].data = 1;
        }
      }

    },
    //旋转b:当前方块、d:要渲染的位置、z:渲染的对象现在还是下一个、xz:当前选转角度
    //旋转
    change(b, d, z, xz) {
      this.renderBlock(b, d, 0);
      //记录第一块位置
      const x = b.site[0];
      const y = b.site[1];
      for (let i = 0; i < b.site.length; i += 2) {
        let a = b.site[i];
        b.site[i] = b.site[i + 1] - y + x + transition[z.b][xz].x;
        b.site[i + 1] = -(a - x) + y + transition[z.b][xz].y;
      }
      xz++;
      if (xz == 4) {
        xz = 0;
      }
      this.renderBlock(b, d, 1);
    },

    //自动下落
    autMoveDown() {

      this.timer = setInterval(() => {
        this.moveDown();

      }, this.speed);
    },
    //开始与暂停
    stopGame() {
      this.stop = !this.stop;
      if (this.stop) {
        clearInterval(this.timer);
      } else {
        this.autMoveDown();
      }
    },

    //向下移动
    moveDown() {
      if (this.canMove(3)) {
        //先清理
        this.renderBlock(this.nowBlock, this.frame, 0);
        for (let i = 0; i < this.nowBlock.site.length; i += 2) {
          //向下移动一位
          this.nowBlock.site[i]++;
        }
        //再渲染形状数据
        this.renderBlock(this.nowBlock, this.frame, 1);
      } else {
        //已经不能下落了
        // clearInterval(this.timer);

        this.renderBlock(this.nowBlock, this.frame, 2);

        //判断是否可以消除
        this.removeBlock();
      }
    },

    //向左移动
    moveLeft() {
      if (this.canMove(2)) {
        //先清理
        this.renderBlock(this.nowBlock, this.frame, 0);
        for (let i = 0; i < this.nowBlock.site.length; i += 2) {
          //向下移动一位
          this.nowBlock.site[i + 1]--;
        }
        //再渲染形状数据
        this.renderBlock(this.nowBlock, this.frame, 1);
      }
    },

    //向右移动
    moveRight() {
      if (this.canMove(1)) {
        //先清理
        this.renderBlock(this.nowBlock, this.frame, 0);
        for (let i = 0; i < this.nowBlock.site.length; i += 2) {
          //向下移动一位
          this.nowBlock.site[i + 1]++;
        }
        //再渲染形状数据
        this.renderBlock(this.nowBlock, this.frame, 1);
      }
    },

    //下落时旋转
    //旋转b:当前方块、xz:当前选转角度
    change1() {
      this.isGift = false
      this.giftImg = ''
      setTimeout(() => {
        this.isGift = true
        this.giftImg = this.giftList[Math.floor(Math.random() * this.giftList.length)]
      }, 300)
      const b = JSON.parse(JSON.stringify(this.nowBlock));
      //记录第一块位置
      const x = b.site[0];
      const y = b.site[1];

      let n = true;
      for (let i = 0; i < b.site.length; i += 2) {
        let a = b.site[i];
        b.site[i] = b.site[i + 1] - y + x + transition[this.now.b][this.xz].x;
        b.site[i + 1] = -(a - x) + y + transition[this.now.b][this.xz].y;

        //判断旋转后该点是否合理
        if (b.site[i + 1] < 0 || b.site[i + 1] >= this.col || b.site[i] >= this.row || this.frame[b.site[i]][b.site[i + 1]].data > 0) {
          n = false;
        }
      }
      //符合条件 
      if (n) {
        this.renderBlock(this.nowBlock, this.frame, 0);
        this.xz++;
        if (this.xz == 4) {
          this.xz = 0;
        }
        this.nowBlock = b;
        this.renderBlock(this.nowBlock, this.frame, 1);
      }
    },

    //是否可移动判断
    //预判能否移动或变化，e:1.右移，2.左移，3.下移，4.变化
    canMove(e) {
      let d = 0;
      let c = this.nowBlock.site;
      switch (e) {
        case 1:
          for (let i = 0; i < c.length; i += 2) {
            if (c[i + 1] >= this.col - 1) {
              return false;
            }
            //判断下一个位置是否被占用
            d += this.frame[c[i]][c[i + 1] + 1].data;
          }
          if (d > 0) {
            return false;
          }
          break;
        case 2:
          for (let i = 0; i < c.length; i += 2) {
            if (c[i + 1] <= 0) {
              return false;
            }
            //判断下一个位置是否被占用
            d += this.frame[c[i]][c[i + 1] - 1].data;
          }
          if (d > 0) {
            return false;
          }
          break;
        case 3:
          for (let i = 0; i < c.length; i += 2) {
            if (c[i] >= this.row - 1) {
              return false;
            }
            //判断下一个位置是否被占用
            d += this.frame[c[i] + 1][c[i + 1]].data;
          }
          if (d > 0) {
            return false;
          }
          break;
      }
      return true;
    },
    //判断是否可以消除
    removeBlock() {
      //遍历整个界面
      for (let i = 0; i < this.row; i++) {
        let a = 0;
        for (let j = 0; j < this.col; j++) {
          if (this.frame[i][j].data == 1) {
            a++
          }
        }
        if (a == this.col) {
          //说明这一行已经占满可以消除
          this.removeRow.push(i);
        }
      }
      //获取是否可以消除行
      if (this.removeRow.length > 0) {
        let l = this.removeRow;
        for (let i = 0; i < l.length; i++) {
          let j = 0;
          let timer = setInterval(() => {
            this.frame[l[i]][j] = { bg: this.bg, data: 0, }
            j++;
            if (j == this.col) {
              clearInterval(timer);
            }
          }, 20)
        }
        setTimeout(() => {
          //上面方块下移,从下往上判断
          for (let i = this.row - 1; i >= 0; i--) {
            let a = 0;
            for (let j = 0; j < l.length; j++) {
              if (l[j] > i) {
                a++;
              }
            }
            if (a > 0) {
              for (let k = 0; k < this.col; k++) {
                if (this.frame[i][k].data == 1) {
                  //先向下移动
                  this.frame[i + a][k] = this.frame[i][k];
                  //再清楚当前
                  this.frame[i][k] = { data: 0, bg: this.bg };
                }
              }
            }
          }
          //清除行记录
          this.removeRow = [];
          //生成下一个
          this.init();
        }, 20 * this.col)
        //数据处理
        //消除次数+1
        this.times++;
        //等级向下取整+1
        let lev = Math.floor(this.times/10)+1;
        if (lev > this.level) {
          this.level = lev;
          //速度
          if (this.level < 21) {
            //20级内做减法
            this.speed = 800 - (this.level - 1) * 40;
          } else {
            this.speed = 30;
          }
          //清除当前下落
          clearInterval(this.timer);
          //加速
          this.autMoveDown();
        }
        this.level = this.times;
        //分数消除一行100，两行300，三行600，四行1000
        this.score += ((l.length) * (l.length + 1) / 2) * 100 * this.level;

      } else {
        //生成下一个
        this.init();
      }
    },
    // 监听键盘
    keyDown() {
      document.onkeydown =  (e) => {
        //事件对象兼容
        let e1 = e || event || window.event || arguments.callee.caller.arguments[0]
        const res = e1.keyCode
        if (this.stop && res !== 13) {
          return false
        }
        switch (res) {
          case 13:
            this.stopGame()
            break
          case 32:
            this.change1()
            break
          case 37:
            this.moveLeft()
            break
          case 39:
            this.moveRight()
            break
          case 40:
            this.moveDown()
            break
          default:
            break
        }
      }
    },

  },
  mounted() {
    this.gameFrame();
    this.getBlock(0);
    this.getNext();
    this.init();
    this.keyDown()
  }
}
</script>

<style lang="less" scoped>
.tetris {
  background: rgb(68, 118 , 55);
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .game {
    .title {
      font-size: 36px;
      text-align: center;
      padding: 10px 0;
      font-weight: 600;
      color: #2B9DF5;
      font-family: cursive;
    }
    .game-div {
      display: flex;
      position: relative;

      .game-min {

        .row {
          display: flex;
          padding-top: 1px;

          .element {
            width: 22px;
            height: 22px;
            padding: 0;
            margin: 0 1px 0 0;
          }
        }
      }

      .right-div {
        padding-left: 12px;

        .ass {
          margin-bottom: 20px;
          .row {
            display: flex;
            padding-top: 1px;

            .element {
              width: 20px;
              height: 20px;
              padding: 0;
              margin: 0 1px 0 0;
            }
          }
        }

        .data {
          font-weight: 700;
          font-size: 16px;
          color: #00aaee;
        }

        .play {
          width: 70px;
          height: 32px;
          background: linear-gradient(180deg, #FFED48 0%, #FD9E16 100%);
          text-align: center;
          line-height: 32px;
          border-radius: 8px;
          color: white;
        }

        .mb10 {
          margin-bottom: 10px;
        }

        .gift {
          //height: 133px;
          //position: relative;
          &-top {
            position: absolute;
            bottom: 50px;
            right: 20px;
            animation:fadenum 2s linear;
          }
          @keyframes fadenum{
            0%{
              bottom: 25px;
              transform:translateY(20px);
            }
            50%{transform:translateY(-20px);}
            100%{
              //transform:translateY(-40px);
              bottom: 50px;
            }
          }
          &-bottom {
            position: absolute;
            bottom: -23px;
            right: -10px
          }
        }
      }
    }
    .control {
      padding-top: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .zy {
        display: flex;
        .left {
          padding-right: 40px;
        }
      }

      .down {
        text-align: center;
      }
    }
  }
}
</style>