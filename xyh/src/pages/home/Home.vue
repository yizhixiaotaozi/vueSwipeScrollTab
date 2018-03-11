<template>
<drawer width="200px;" :show.sync="drawerVisibility" show-mode="push" placement="left" :drawer-style="{width: '280px'}">
  <DrawerPanel slot="drawer"> </DrawerPanel>
  <div style="height: 100%;">
    <keep-alive>
      <router-view v-on:showDrawer="showDrawer"></router-view>
    </keep-alive>

    <Tabbar slot="bottom">
      <TabbarItem selected link="/home/news">
        <img slot="icon" src="../../assets/tabbarIcon/news.png">
        <span slot="label">资讯</span>
      </TabbarItem>
      <TabbarItem show-dot link="/home/activity">
        <img slot="icon" src="../../assets/tabbarIcon/activity.png">
        <span slot="label">活动</span>
      </TabbarItem>
      <TabbarItem badge="2" link="/home/broadCast">
        <img slot="icon" src="../../assets/tabbarIcon/broadcast.png">
        <span slot="label">直播</span>
      </TabbarItem>
      <TabbarItem link="/home/welfare">
        <img slot="icon" src="../../assets/tabbarIcon/welfare.png">
        <span slot="label">福利</span>
      </TabbarItem>
      <TabbarItem link="/home/service">
        <img slot="icon" src="../../assets/tabbarIcon/service.png">
        <span slot="label">服务</span>
      </TabbarItem>
    </Tabbar>
  </div>
</drawer>
</template>
<script>
import {
  Tabbar,
  TabbarItem,
  Drawer
} from 'vux'
import DrawerPanel from '@/components/drawer/DrawerPanel'
export default {
  name: 'Home',
  components: {
    Tabbar,
    TabbarItem,
    Drawer,
    DrawerPanel
  },
  data() {
    return {
      drawerVisibility: false
    }
  },
  methods: {
    showDrawer: function() {
      this.drawerVisibility = true
    }
  }
}
</script>
<style>

</style>
