import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import News from '@/pages/home/News'

const Activity = resolve => require(['@/pages/home/Activity'], resolve)
const BroadCast = resolve => require(['@/pages/home/BroadCast'], resolve)
const Welfare = resolve => require(['@/pages/home/Welfare'], resolve)
const Service = resolve => require(['@/pages/home/Service'], resolve)
const SearchNews = resolve => require(['@/pages/search/SearchNews'], resolve)

const AuthRoad = resolve => require(['@/pages/authenticate/AuthRoad'], resolve)


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/authRoad',
      name: 'AuthRoad',
      component: AuthRoad
    },
    {
      path: '/home',
      redirect: '/home/news',
      name: 'Home',
      component: Home,
      children: [{
          path: '/home/news',
          name: 'News',
          component: News
        },
        {
          path: '/home/activity',
          name: 'Activity',
          component: Activity
        },
        {
          path: '/home/broadCast',
          name: 'BroadCast',
          component: BroadCast
        },
        {
          path: '/home/welfare',
          name: 'Welfare',
          component: Welfare
        },
        {
          path: '/home/service',
          name: 'Service',
          component: Service
        }
      ]
    },
	{
      path: '/searchNews',
      name: 'SearchNews',
      component: SearchNews
    }
  ]
})
