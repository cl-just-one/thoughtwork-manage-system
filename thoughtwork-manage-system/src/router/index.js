import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DashBoard from '@/components/DashBoard'
import Agent from '@/components/Agent'
import MyCruise from '@/components/MyCruise'
import Help from '@/components/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/DashBoard',
      name: 'DashBoard',
      component: DashBoard
    }, {
      path: '/Agent',
      name: 'Agent',
      component: Agent
    }, {
      path: '/MyCruise',
      name: 'MyCruise',
      component: MyCruise
    }, {
      path: '/Help',
      name: 'Help',
      component: Help
    }
  ]
})
