<template>
<div class="newsWrapper">
  <header class="newsHeader">
    <!--右侧图标-->
    <div class="avatar" @click="clickAvatar">
      <img src="../../assets/user/school.jpg" />
    </div>
    <!--中间tab内容-->
    <div class="tabs">
      <div class="tabsWrapper" ref="tabDiv">
        <tab :line-width="2" custom-bar-width="30px" bar-active-color="#2b99ff" active-color="#2b99ff" style="width: 340px;">
          <tab-item :selected="tabIndex == 0" @on-item-click="tabClick">新闻</tab-item>
          <tab-item :selected="tabIndex == 1" @on-item-click="tabClick">公告</tab-item>
          <tab-item :selected="tabIndex == 2" @on-item-click="tabClick">专栏</tab-item>
          <tab-item :selected="tabIndex == 3" @on-item-click="tabClick">文苑</tab-item>
          <tab-item :selected="tabIndex == 4" @on-item-click="tabClick">投稿</tab-item>
          <tab-item :selected="tabIndex == 5" @on-item-click="tabClick">捐赠</tab-item>
        </tab>
      </div>
    </div>
    <!--搜索图标-->
    <div class="search" @click="toSearch">
      <img src="../../assets/search.png" />
    </div>
  </header>
  <div class="newsContent">
    <swiper style="height: 100%;" :options="swiperOption" ref="mySwiper" @slideChange="slideChange">
      <swiper-slide style="height: 100%;">
        <NewsScroller></NewsScroller>
      </swiper-slide>
      <swiper-slide style="height: 100%;">
        <SwiperScroller></SwiperScroller>
      </swiper-slide>
      <swiper-slide style="height: 100%;">专栏</swiper-slide>
      <swiper-slide style="height: 100%;">文苑</swiper-slide>
      <swiper-slide style="height: 100%;">投稿</swiper-slide>
      <swiper-slide style="height: 100%;">捐赠</swiper-slide>
    </swiper>
  </div>
</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {
  Tab,
  TabItem
} from 'vux'
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import NewsScroller from '@/components/articles/NewsScroller'
import SwiperScroller from '@/components/utils/SwiperScroller'
export default {
  name: 'News',
  components: {
    Tab,
    TabItem,
    swiper,
    swiperSlide,
    SwiperScroller,
    NewsScroller
  },
  data() {
    return {
      tabIndex: 0,
      swiperOption: {
        allowSlideNext: true,
        allowSlidePrev: false,
        touchAngle: 40
      }
    }
  },
  methods: {
    slideChange() {
      //滑动tab
      this.tabIndex = this.$refs.mySwiper.swiper.activeIndex
      if (this.tabIndex < 4) {
        this.$refs.tabDiv.scrollLeft = 0
      } else {
        this.$refs.tabDiv.scrollLeft = 40
      }
      //如果到第一张或者最后一张
      this.$refs.mySwiper.swiper.allowSlidePrev = this.tabIndex != 0
      this.$refs.mySwiper.swiper.allowSlideNext = this.tabIndex != 5
    },
    clickAvatar() {
      //点击头像
      this.$emit('showDrawer')
    },
    toSearch() {
      //开启搜索
      this.$router.push('/searchNews')
    },
    tabClick(newIndex) {
      //点击tab
      this.$refs.mySwiper.swiper.slideTo(newIndex, 1000, false)
    }
  }
}
</script>
<style>
.newsWrapper {
  height: 100%;
  position: relative;
  padding-bottom: 53px;
  padding-top: 44px;
}

.newsHeader {
  height: 44px;
  position: fixed;
  top: 0;
  width: 100%;
}

.newsHeader .avatar {
  position: absolute;
  left: 0;
  top: 0;
  width: 44px;
  height: 100%;
  padding: 4px;
}

.newsHeader .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.newsHeader .tabs {
  width: 100%;
  padding-left: 44px;
  padding-right: 44px;
}

.newsHeader .tabs .tabsWrapper {
  width: 100%;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.newsHeader .search {
  position: absolute;
  right: 0;
  top: 0;
  width: 44px;
  height: 100%;
}

.newsHeader .search img {
  width: 26px;
  height: 26px;
  position: absolute;
  top: 9px;
  left: 9px;
}

.newsContent {
  height: 100%;
}

.vux-tab .vux-tab-item {
  font-size: 16px !important;
}
</style>
