<template>
  <div style="width: 100%;height: 100%;">
    <XHeader style="background-color:rgb(43, 153, 255);">认证通道</XHeader>
    <div style="margin: 10px;overflow: hidden;">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: student}"></div>
        <div slot="content" class="m-title">
          学子通道
          <br/>
          <span class="m-time">点击进入</span>
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: teacher}"></div>
        <div slot="content" class="m-title">
          教职工通道
          <br/>
          <span class="m-time">点击进入</span>
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: supplier}"></div>
        <div slot="content" class="m-title">
          供应商通道
          <br/>
          <span class="m-time">点击进入</span>
        </div>
      </masker>
    </div>
  </div>
</template>
<script>
import { Masker ,XHeader} from 'vux'
export default {
  name: 'AuthRoad',
  components: {
    Masker,
    XHeader
  },
  data () {
    return {
      student:'url(' + require('../../assets/img/student.jpg') + ')',
      teacher:'url(' + require('../../assets/img/teacher.jpg') + ')',
      supplier:'url(' + require('../../assets/img/supplier.jpg') + ')',
    }
  }
}
</script>
<style>
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
