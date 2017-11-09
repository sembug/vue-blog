import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import PostPage from '@/components/PostPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: PostPage
    }
  ]
})
