<template>
<div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper" @touchEnd="touchEnd" @touchStart="touchStart">
    <div class="refresh" ref="refresh">释放刷新</div>
    <swiper-slide style="height: 100px;">文章1</swiper-slide>
    <swiper-slide style="height: 100px;">文章2</swiper-slide>
    <swiper-slide style="height: 100px;">文章3</swiper-slide>
    <swiper-slide style="height: 100px;">文章4</swiper-slide>
    <swiper-slide style="height: 100px;">文章5</swiper-slide>
    <swiper-slide style="height: 100px;">文章6</swiper-slide>
    <swiper-slide style="height: 100px;">文章7</swiper-slide>
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
export default {
  name: 'SwiperScroller',
  components: {
    swiper,
    swiperSlide,
    vueLoading
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
      refreshing: false,
      pageNo: 0
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
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
        //this.swiper.params.virtualTranslate = true //定住不给回弹
        //加载中
        this.$refs.refresh.innerHTML = this.$refs.svg.innerHTML
        this.refreshing = true

        setTimeout(() => { //模仿AJAX
          this.swiper.removeAllSlides();
          for (var i = 0; i < 20; i++) {
            this.swiper.appendSlide('<div class="swiper-slide" style="height: 100px;">新加载的' + (i + 1) + '</div>');
          }

          //拉取数据完成
          this.refreshing = false
          this.$refs.refresh.innerHTML = '刷新完成'
          //回弹
          setTimeout(() => {
            this.swiper.allowTouchMove = true
            //this.swiper.params.virtualTranslate = false
            this.swiper.update()
          }, 300)
        }, 1000)
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
        this.$refs.refresh.innerHTML = '释放刷新'
      }
    },
    loadMore() {
      //console.log('longdingMore')
      this.swiper.allowTouchMove = false; //禁止触摸
      this.swiper.params.virtualTranslate = true; //定住不给回弹
      setTimeout(() => { //模仿AJAX
        for (var m = 0; m < 10; m++) {
          this.swiper.appendSlide('<div class="swiper-slide" style="height: 100px;">moreSlide' + (this.pageNo * 10 + m + 1) + '</div>')
        }

        this.swiper.params.virtualTranslate = false
        this.swiper.allowTouchMove = true
      }, 1000)

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
}

.loadmore {
  position: absolute;
  height: 50px;
  top: 100%;
  width: 100%;
}
</style>
