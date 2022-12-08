<template>
  <div>
    <n-watermark
        content="核心机密"
        cross
        selectable
        :font-size="16"
        :line-height="16"
        :width="192"
        :height="128"
        :x-offset="12"
        :y-offset="28"
        :rotate="-15"
    >
      <div class="home-index">
        <div class="cell" v-for="item in list" :key="item">
          <div class="li-div" @click="routeToPage(item.url)">
            <div class="photo-img">
              <n-image
                  width="342"
                  height="257"
                  lazy
                  preview-disabled
                  :src="item.img"
              >
                <template #placeholder>
                  <div
                      style="
            width: 342px;
            height: 257px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
                  >
                    <n-image
                        class="img"
                        preview-disabled
                        width="100"
                        height="100"
                        :src="require('../assets/svg/home/loading.svg')"
                    />
                  </div>
                </template>
              </n-image>
            </div>
            <div class="msg">
              <p class="title">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </n-watermark>
  </div>

</template>

<script>
import { showToast } from 'vant';
import { apiQueryCards } from "@/apis/lushi";

export default {
  data() {
    return {
      icon: require('../assets/svg/home/qidai.svg'),
      list: [
        {
          img: require('../assets/png/home/img.png'),
          name: '俄罗斯方块游戏',
          url: '/tetris'
        },
        {
          img: require('../assets/png/home/img_1.png'),
          name: '贪吃蛇小游戏',
          url: ''
        },
      ]
    }
  },
  methods: {
    routeToPage(path) {
      if (!path) {
        showToast({
          message: 'Coming soon',
          icon: this.icon,
          iconSize: 50
        });
        return console.log('Coming soon')
      }
      this.$router.push('/tetris');
    }
  },
  mounted() {
    apiQueryCards(
        '/api/action/cards/query',
        {
          cardClass: 'druid',
          cost: '',
          keywords: '',
          standard: 1,
          t: new Date().getTime(),
          cardSet: '',
          p: 1
        },
    ).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="less" scoped>
.home-index {
  margin: 0 auto;
  padding: 72px 24px 30px;
  background: rgb(244, 244, 245);
  .cell {
    .li-div {
      display: block;
      text-decoration: none;
      overflow: hidden;
      background: #fff;
      width: 100%;
      padding-bottom: 60px;
      box-sizing: border-box;
      margin-bottom: 30px;
      border-radius: 8px;
      position: relative;
      transition: all .3s;
      .photo-img {
        width: 100%;
        padding: 0;
        margin: 0;
        display: block;
        .img{
          //animation: jumpBoxHandler  2s infinite;
          animation: rotation 2s linear infinite;
        }
        @keyframes rotation {
          0% {
            -webkit-transform: rotate(0deg);
          }
          50% {
            -webkit-transform: rotate(20deg);
          }
          100% {
            -webkit-transform: rotate(-20deg);
          }
        }
        //@keyframes jumpBoxHandler {
        //  0% {
        //    transform: translate(100%);/*开始位置*/
        //
        //  }
        //  50% {
        //    transform: translateX(-50%) ; /* 可配置跳动方向 translate(15px, 15px)*/
        //  }
        //  100% {
        //    transform: translateX(100%);/*结束位置*/
        //  }
        //}
      }
      .msg {
        padding: 24px 20px 0 20px;
        font-size: 18px;
        font-weight: 700;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
      p {
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>