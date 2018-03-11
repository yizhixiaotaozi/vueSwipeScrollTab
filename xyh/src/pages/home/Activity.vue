<template>
<div class="activityWrapper">
  <SwiperScroller></SwiperScroller>
</div>
</template>
<script>
import SwiperScroller from '@/components/utils/SwiperScroller'
export default {
  name: 'Activity',
  components: {
    SwiperScroller
  }
}
</script>
<style>
.activityWrapper {
  height: 100%;
  position: relative;
  padding-bottom: 53px;
  background-color: yellow;
}
</style>
