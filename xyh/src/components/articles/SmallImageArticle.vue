<template>
<div class="wrapper">
  <div class="imgWrapper">
    <img :src="smallImg">
  </div>
  <div class="contentWrapper">
    <div class="title">{{title}}</div>
    <div class="info clearfix">
      <div style="float: left;">{{createBy}} / {{viewCount}}阅</div>
      <div style="float: right;">{{createTm}}</div>
    </div>
  </div>
  <hr style="height:1px;border:none;border-top:1px solid #F0F0F0;" />
</div>
</template>
<script>
export default {
  name: 'SmallImageArticle',
  props: ['title', 'type', 'linkType', 'smallImg', 'bigImg', 'createBy', 'viewCount', 'createTm', 'newsId']
}
</script>
<style scoped>
.wrapper {
  position: relative;
  height: 100px;
  padding: 5px;
}

.contentWrapper {
  position: relative;
  height: 100%;
  margin-right: 130px;
}

.imgWrapper {
  height: 100%;
  float: right;
  width: 120px;
  padding: 5px;
}

.contentWrapper .title {
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  font-size: 16px;
  color: rgb(53, 73, 94)
}

.contentWrapper .info {
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 20px;
  font-size: 12px;
  color: rgb(53, 73, 94);
}

.imgWrapper img {
  width: 100%;
  height: 100%;
  border-radius: 5px
}
</style>
