<template>
<div class="wrapper">
  <div class="upper">
    <div class="infobox">
      <div style="flex-grow: 1;" @click="toAuth">
        <img src="../../assets/lock.png" style="vertical-align:bottom" />
        <div>认证通道</div>
      </div>
      <div style="flex-grow: 1;">
        <img src="../../assets/message.png" style="vertical-align:bottom" />
        <div>组织广场</div>
      </div>
      <div style="flex-grow: 1;">
        <img src="../../assets/mail.png" style="vertical-align:bottom" />
        <div>消息</div>
      </div>
    </div>
    <div class="avatarAndCard clearfix">
      <div class="avatarWrapper">
        <div class="avatarImg">
          <img src="../../assets/user/avatar.jpg" />
        </div>
        <div class="avatarText">
          胡淘
          <Icon type="safe-success"></Icon>认证教师
        </div>
      </div>
      <div class="cardWrapper">
        <div class="cardImg">
          <img src="../../assets/card.png" />
        </div>
        <div class="cardText">电子校友卡</div>
      </div>
    </div>
  </div>
  <div class="content">
    <hr style="height:1px;border:none;border-top:1px solid #E0E0E0;" />
    <group title="我的">
      <cell title="个人信息" is-link></cell>
      <cell title="学籍信息" is-link></cell>
      <cell title="工作/行业" is-link></cell>
    </group>
    <group title="工作通知">
      <cell>
        <span slot="title" style="color:green;"> <span style="vertical-align:middle;">您申请补办的学位证已交由快递公司配送</span>
        <badge text="1"></badge>
        </span>
      </cell>
    </group>
  </div>
</div>
</template>
<script>
import {
  Icon,
  Cell,
  CellBox,
  Group,
  Badge
}
from 'vux'
export default {
  name: 'Drawer',
  components: {
    Icon,
    Cell,
    CellBox,
    Group,
    Badge
  },
  methods: {
    toAuth(){
      this.$router.push('/authRoad')
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.upper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160px;
}

.content {
  width: 100%;
  height: 100%;
  padding-top: 160px;
}

.infobox {
  width: 100%;
  height: 55px;
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  display: -webkit-flex;

  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  text-align: center;
  /*align-items: flex-end;*/
  align-items: center;

  font-size: 14px;
  color: rgb(53, 73, 94);
}

.avatarAndCard {
  width: 100%;
  height: 100%;
  padding-bottom: 55px;
}

.avatarWrapper {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  min-width: 120px;
  height: 75px;
  text-align: center;
}

.cardWrapper {
  float: right;
  margin-right: 40px;
  margin-top: 18px;
  height: 75px;
  text-align: center;
}

.avatarText {
  font-size: 14px;
  color: rgb(53, 73, 94);
}

.avatarImg {}

.avatarImg img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #ececec;
}

.cardText {
  font-size: 14px;
  color: rgb(53, 73, 94);
}

.cardImg {}

.cardImg img {
  width: 32px;
  height: 32px;
}
</style>
