<template>
<div class="wrapper">
  <swiper :options="swiperOption" ref="swiper" @touchEnd="touchEnd" @touchStart="touchStart" @touchMove="touchMove">
    <div class="refresh" ref="refresh">释放刷新</div>
    <swiper-slide style="height: 140px;">
      <swiper style="height: 140px;" ref="bannerSwiper" :options="bannerOption">
        <!--v-if="banners.length == 0"
        <swiper-slide v-if="bannersLoading" v-for="n in 3" :key="n" style="width: 95%;height: 100%;">
          <vue-loading style="margin-top: 40px;" type="spiningDubbles" color="rgb(43, 153, 255)" :size="{ width: '50px', height: '50px' }"></vue-loading>
        </swiper-slide>-->
        <swiper-slide v-for="(banner, index) in banners" :key="banner.src" style="width: 90%;height: 100%;margin-left: 10px;">
          <img style="width: 100%;height: 100%;" :src="banner.src">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </swiper-slide>
    <swiper-slide style="height: auto" v-for="(article, index) in articles">
      <div v-bind:is="article.type" v-bind="article"></div>
    </swiper-slide>
    <div class="loadmore" ref="loadmore">
      <vue-loading type="spiningDubbles" color="rgb(43, 153, 255)" :size="{ width: '32px', height: '32px' }"></vue-loading>
    </div>
  </swiper>
  <!--用来原生js添加加载图片-->
  <div ref="svg" style="display:none;">
    <vue-loading type="spiningDubbles" color="rgb(43, 153, 255)" :size="{ width: '32px', height: '32px' }"></vue-loading>
  </div>
</div>
</template>
<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import vueLoading from 'vue-loading-template'
import BigImageArticle from '@/components/articles/BigImageArticle'
import SmallImageArticle from '@/components/articles/SmallImageArticle'
import newsApi from '@/api/newsApi.js'
export default {
  name: 'SwiperScroller',
  components: {
    swiper,
    swiperSlide,
    vueLoading,
    BigImageArticle,
    SmallImageArticle
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        direction: 'vertical',
        setWrapperSize: true,
        freeModeSticky: false
      },
      bannerOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 'auto',
        centeredSlides: true
      },
      articles: [{
          type: 'SmallImageArticle',
          title: '英国首相特雷莎•梅首次访华首站访问武大',
          smallImg: 'http://www.whu.edu.cn/__local/4/C5/A8/317E341A31CEBFDAD195DCAE577_D4CC377C_14228.jpg',
          createBy: '徐芳',
          viewCount: 112,
          createTm: '2018-01-12',
          newsId: 1
        }, {
          type: 'SmallImageArticle',
          title: '校长窦贤康向李克强总理建言重视发挥人才作用',
          smallImg: 'http://www.whu.edu.cn/__local/4/EB/4C/BA1CD84D99CEB67F8AF0A15873F_15CDAF7F_D97D.jpg',
          createBy: '校党委',
          viewCount: 3049,
          createTm: '2018-02-03',
          newsId: 2
        },
        {
          type: 'SmallImageArticle',
          title: '教育部追授朱英国同志“全国优秀教师”荣誉称号',
          smallImg: 'http://www.whu.edu.cn/__local/D/1F/D0/F02CF0007D1B62A6634E0242591_C4EA2AED_EEB2.jpg',
          createBy: '校党委',
          viewCount: 5286,
          createTm: '2018-01-19',
          newsId: 3
        },
        {
          type: 'BigImageArticle',
          title: '学习宣传党的十九大精神专题',
          bigImg: 'http://www.whu.edu.cn/__local/6/21/3F/47F85A08F51FE7D0DE2340EF98E_53C641AF_EC6C.jpg',
          createBy: '校党委',
          viewCount: 5286,
          createTm: '2018-01-19',
          newsId: 4
        }, {
          type: 'SmallImageArticle',
          title: '【前沿】脂肪肝病研究的突破之路',
          smallImg: 'http://news.whu.edu.cn/__local/C/88/1C/6B3EBB32C5CA154567A8FAB823A_2D344A4B_56FA.jpg',
          createBy: '医学部',
          viewCount: 2286,
          createTm: '2018-01-15',
          newsId: 5
        }
      ],
      banners: [{
          src: 'http://www.zuel.edu.cn/_upload/article/images/a1/28/1bbffc9d49119e3bab5572afabb1/9fff47ba-c9e8-4e40-b3c2-b2adde8f37b8.jpg'
        },
        {
          src: 'http://www.zuel.edu.cn/_upload/article/images/e8/de/f65ca3b9493ba0abbd83eae5d69d/27259693-c482-4859-9117-c12d8a37b601.jpg'
        },
        {
          src: 'http://www.zuel.edu.cn/_upload/article/images/27/ba/69b653894296ab06f2d3950301bf/dcc4ceaf-4c57-48c0-be3a-877c4dfcac0b.jpg'
        },
        {
          src: 'http://www.zuel.edu.cn/_upload/article/images/b6/8d/e7a476884a768c3a32e04656567b/afd4ab71-a1b7-4fdf-824e-05366087c53d.jpg'
        }
      ],
      refreshing: false,
      pageNo: 1,
      pageSize: 10,
      hasMore: true
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiper.swiper
    }
  },
  mounted() {
    this.$nextTick(function() {
      //newsApi.getBanner()
      //  .then((data) => {
      //    for (let i = 0; i < data.length; i++) {
      //      this.banners.push(data[i])
      //    }
      //  })
    })
  },
  methods: {
    //下拉释放刷新
    touchEnd: function() {
      if (this.refreshing) {
        //上一个ajax还在执行
        return;
      }
      if (this.swiper.translate > 80) {
        //如果是下拉大于80偏移
        this.swiper.setTransition(500);
        this.swiper.setTranslate(80);
        this.swiper.touchEventsData.isTouched = false; //跳过touchEnd事件后面的跳转(4.0.5)
        this.swiper.allowTouchMove = false;
        this.swiper.params.virtualTranslate = true //定住不给回弹
        //加载中
        this.$refs.refresh.innerHTML = this.$refs.svg.innerHTML
        this.refreshing = true

        newsApi.getNews(1, this.pageSize)
          .then((data) => {
            this.pageNo = 1
            this.hasMore = data.data.hasMore
            //没有更多了
            if (!data.data.hasMore) {
              this.$refs.loadmore.innerHTML = '没有更多数据了'
            } else {
              this.$refs.loadmore.innerHTML = this.$refs.svg.innerHTML
            }
            this.articles = data.data.list
            //拉取数据完成
            this.refreshing = false
            this.$refs.refresh.innerHTML = '刷新完成'
            //回弹
            setTimeout(() => {
              this.swiper.allowTouchMove = true
              this.swiper.params.virtualTranslate = false
              this.swiper.update()
            }, 300)
          })
      }
      //如果是底部
      var slidesheight = 0;
      for (var h = 0; h < this.swiper.slides.length; h++) {
        slidesheight += this.swiper.slides[h].offsetHeight;
      }
      if (slidesheight < this.swiper.height) {
        if (this.swiper.translate < -70) {
          //如果是上拉拉大于-70偏移 //加载更多
          this.loadMore()
        }
      } else if (this.swiper.height - this.swiper.translate > slidesheight + 50) {
        //如果是上拉拉大于-70偏移 //加载更多
        this.loadMore()
      }
    },
    touchStart: function() {
      if (!this.refreshing) {
        this.$refs.refresh.innerHTML = '下拉刷新'
      }
    },
    touchMove: function() {
      if (this.swiper.translate > 80) {
        this.$refs.refresh.innerHTML = '释放刷新'
      }
    },
    loadMore() {
      if (!this.hasMore) {
        return
      }
      console.log('longdingMore')
      this.swiper.allowTouchMove = false; //禁止触摸
      this.swiper.params.virtualTranslate = true; //定住不给回弹

      newsApi.getNews(this.pageNo + 1, this.pageSize)
        .then((data) => {
          this.pageNo = this.pageNo + 1
          this.hasMore = data.data.hasMore
          if (data.data.list.length > 0) {
            for (let i = 0; i < data.data.list.length; i++) {
              this.articles.push(data.data.list[i])
            }
          }
          this.swiper.setTranslate(this.swiper.translate - 100);
          this.swiper.params.virtualTranslate = false
          this.swiper.allowTouchMove = true

          //没有更多了
          if (!data.data.hasMore) {
            this.$refs.loadmore.innerHTML = '没有更多数据了'
          } else {
            this.$refs.loadmore.innerHTML = this.$refs.svg.innerHTML
          }
        })
    }
  }
}
</script>
<style scoped>
.wrapper {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.refresh {
  position: absolute;
  bottom: 100%;
  height: 50px;
  text-align: center;
  width: 100%;
  font-size: 15px;
  color: rgb(53, 73, 94);
}

.loadmore {
  position: absolute;
  height: 50px;
  top: 100%;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: rgb(53, 73, 94);
}
</style>
