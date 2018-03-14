import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Typography from '@/components/guide/Typography'
import Layout from '@/components/guide/Layout'
import Colour from '@/components/guide/Colour'

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
    },
    {
      path: 'layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: 'colour',
      name: 'Colour',
      component: Colour
    }
  ]
})
