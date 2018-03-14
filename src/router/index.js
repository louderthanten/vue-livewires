import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Typography from '@/components/guide/Typography'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    }
  ]
})
