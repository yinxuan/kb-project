<template>
  <div class="container">
    <van-sticky>
      <div style="height: 44px;">
        <van-nav-bar
            title="我的收藏"
            placeholder
            left-text="返回"
            :right-text="rightText"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
      </div>
    </van-sticky>
    <div class="home-index" style="display: grid;grid-template-columns: 1fr 1fr;">
      <div class="cell" v-for="item in list" :key="item" >
        <n-image
            width="180"
            lazy
            preview-disabled
            :src='item.imageUrl'
            :show-toolbar="false"
        >
          <template #placeholder>
            <div
                style="
            width: 180px;
            height: 248px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
            >
              <n-image
                  class="img"
                  preview-disabled
                  width="50"
                  height="50"
                  :src="require('../../assets/svg/card/loading.svg')"
              />
            </div>
          </template>
        </n-image>
      </div>
    </div>

    <div class="page">
      <van-pagination
          v-model="pageNum"
          :total-items="total"
          :items-per-page="pageSize"
          :show-page-size="3"
          force-ellipses
          @change="choosePage"
      />
    </div>
    <van-popup :show="show" round position="bottom">
      <van-picker
          title="请选择职业"
          :columns="columns"
          @cancel="show = false"
          @confirm="onConfirm"
      />
    </van-popup>
  </div>

</template>

<script>
import { apiQueryCards } from "@/apis/lushi";
import siWangQiShiCardList from "@/views/lushi/card/siwangqishi";
import deMonHunTerCardList from "@/views/lushi/card/demonhunter";
import deLuYiCardList from '@/views/lushi/card/deluyi'
import hunterCardList from "@/views/lushi/card/hunter";
import faShiCardList from "@/views/lushi/card/fashi";
import qiShiCardList from "@/views/lushi/card/qishi";
import muShiCardList from "@/views/lushi/card/mushi";
import daoZeiCardList from "@/views/lushi/card/daozei";
import shaManCardList from "@/views/lushi/card/shaman";
import shuShiCardList from "@/views/lushi/card/shushi";
import zhanShiCardList from "@/views/lushi/card/zhanshi";
import zhongLiCardList from "@/views/lushi/card/zhongli";
export default {
  data() {
    return {
      pageNum: 0,
      pageSize: 8,
      total: 10,
      list: [],
      rightText: '死亡骑士',
      show: false,
      columns: [
        { text: '死亡骑士', value: '死亡骑士' },
        { text: '恶魔猎手', value: '恶魔猎手' },
        { text: '德鲁伊', value: '德鲁伊' },
        { text: '猎人', value: '猎人' },
        { text: '法师', value: '法师' },
        { text: '圣骑士', value: '圣骑士' },
        { text: '牧师', value: '牧师' },
        { text: '潜行者', value: '潜行者' },
        { text: '萨满', value: '萨满' },
        { text: '术士', value: '术士' },
        { text: '战士', value: '战士' },
        { text: '中立', value: '中立' },
      ],
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/')
    },
    onClickRight() {
      this.show = true
    },
    choosePage(e) {
      this.pageNum = e
      const num = (e - 1) * this.pageSize
      const size = num + 8
      this.fetchCardData(num, size)
    },
    onConfirm(e) {
      const value = e.selectedValues[0]
      this.rightText = value
      this.pageNum = 0
      this.fetchCardData(0, 8)
      this.show = false
    },
    fetchCardData(pageNum, pageSize) {
      this.list = []
      switch (this.rightText) {
        case '死亡骑士':
          this.total = siWangQiShiCardList.length
          this.list = siWangQiShiCardList.slice(pageNum, pageSize)
          break
        case '恶魔猎手':
          this.total = deMonHunTerCardList.length
          this.list = deMonHunTerCardList.slice(pageNum, pageSize)
          break
        case '德鲁伊':
          this.total = deLuYiCardList.length
          this.list = deLuYiCardList.slice(pageNum, pageSize)
          break
        case '猎人':
          this.total = hunterCardList.length
          this.list = hunterCardList.slice(pageNum, pageSize)
          break
        case '法师':
          this.total = faShiCardList.length
          this.list = faShiCardList.slice(pageNum, pageSize)
          break
        case '圣骑士':
          this.total = qiShiCardList.length
          this.list = qiShiCardList.slice(pageNum, pageSize)
          break
        case '牧师':
          this.total = muShiCardList.length
          this.list = muShiCardList.slice(pageNum, pageSize)
          break
        case '潜行者':
          this.total = daoZeiCardList.length
          this.list = daoZeiCardList.slice(pageNum, pageSize)
          break
        case '萨满':
          this.total = shaManCardList.length
          this.list = shaManCardList.slice(pageNum, pageSize)
          break
        case '术士':
          this.total = shuShiCardList.length
          this.list = shuShiCardList.slice(pageNum, pageSize)
          break
        case '战士':
          this.total = zhanShiCardList.length
          this.list = zhanShiCardList.slice(pageNum, pageSize)
          break
        case '中立':
          this.total = zhongLiCardList.length
          this.list = zhongLiCardList.slice(pageNum, pageSize)
          break
        default:
          break
      }
    }
  },
  mounted() {
    this.fetchCardData(0, 8)
  }
  // mounted() {
  //   let p = 1
  //   let result = []
  //   let list
  //   let time = setInterval(() => {
  //     if (p > 157) {
  //       clearInterval(time)
  //       console.log("result", result)
  //     }
  //     apiQueryCards(
  //         '/api/action/cards/query',
  //         {
  //           cardClass: 'neutral',
  //           cost: '',
  //           keywords: '',
  //           standard: 0,
  //           t: new Date().getTime(),
  //           cardSet: '',
  //           p: p
  //         },
  //     ).then(res => {
  //       list = res.cards.map(item => {
  //         return {
  //           imageUrl: item.imageUrl,
  //           description: item.description,
  //           legacyKeywords: item.legacyKeywords
  //         }
  //       })
  //       result = result.concat(list)
  //     }).catch(err => {
  //       console.log(err)
  //     }).finally(() => {
  //       p++
  //     })
  //   }, 3000)
  //
  // }
}
</script>

<style lang="less" scoped>
.container {
  background: rgb(244, 244, 245);
  min-height: 100vh;
  .home-index {
    padding: 10px 0 30px;
    overflow-x: hidden;

    .cell {
      display: flex;
      justify-content: center;
    }
  }
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
  }
  /deep/.van-pagination__item button {
    color: white;
  }
  /deep/.van-pagination__item {
    background: linear-gradient(180deg, #7BE7FF 2%, #1E85E2 100%);
  }
  /deep/.van-pagination__item--active {
    background: linear-gradient(180deg, #89FED8 0%, #18C997 100%);
  }
  /deep/.van-pagination__item, .van-pagination__page-desc {
    padding: 10px !important;
    margin: 0 2px;
    border-radius: 10px !important;
  }
  .img{
    //animation: jumpBoxHandler  2s infinite;
    animation: rotation 2s linear infinite;
  }
  @keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
}
</style>