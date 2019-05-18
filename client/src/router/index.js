import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home2 from '@/components/Home2'
import Main from '@/components/Main'
import Lists from '@/components/Lists'
import Posts from '@/components/Posts'
import UserProfile from '@/components/UserProfile'
import Add from '@/components/Add'
import Header from '@/components/Header'
import Scam from '@/components/Scam'
import Try from '@/components/Try'
import Top from '@/components/Tops'
import Resumes from '@/components/Resumes'
import PostDetail from '@/components/PostDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/try',
      name: 'Try',
      component: Try 
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/home',
          name: 'Home2',
          component: Home2,
          children: [
            {
              path: '/top',
              component: Top
            },
            {
              path: '/rsm',
              component: Resumes
            },
            {
              path: '/detail',
              component: PostDetail
            },
            {
              path: '/posts/:category',
              component: Posts
            },
            {
              path: '/add/:addCategory',
              component: Add
            },
            {
              path: '/profile',
              component: UserProfile
            },
            {
              path: '/scam',
              component: Scam
            },
            {
              path: '/header',
              name: 'Header',
              component: Header
            }
          ]
        }
      ]
    }
  ]
})
