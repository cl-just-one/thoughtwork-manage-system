import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Agent from '@/components/body/Agent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/DashBoard',
          name: 'DashBoard',
          component: Agent
        }, {
          path: '/Agent',
          name: 'Agent',
          component: Agent
        }, {
          path: '/MyCruise',
          name: 'MyCruise',
          component: Agent
        }, {
          path: '/Help',
          name: 'Help',
          component: Agent
        }
      ]
    }
  ]
})
