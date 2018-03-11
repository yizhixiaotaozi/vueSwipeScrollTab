<template>
<div class="wrapper">
  <div class="contentWrapper">
    {{title}}
  </div>
  <div class="imgWrapper">
    <img :src="bigImg">
  </div>
  <div class="infoWrapper clearfix">
    <div style="float: left;">{{createBy}} / {{viewCount}}阅</div>
    <div style="float: right;">{{createTm}}</div>
  </div>
  <hr style="height:1px;border:none;border-top:1px solid #F0F0F0;" />
</div>
</template>
<script>
export default {
  name: 'BigImageArticle',
  props: ['title', 'type', 'linkType', 'smallImg', 'bigImg', 'createBy', 'viewCount', 'createTm', 'newsId']
}
</script>
<style scoped>
.wrapper {
  padding: 5px;
}

.contentWrapper {
  font-size: 16px;
  color: rgb(53, 73, 94)
}

.imgWrapper {
  width: 100%;
  height: 140px;
  padding: 5px;
}

.imgWrapper img {
  width: 100%;
  height: 100%;
  border-radius: 5px
}

.infoWrapper {
  height: 20px;
  font-size: 12px;
  color: rgb(53, 73, 94);
}
</style>
