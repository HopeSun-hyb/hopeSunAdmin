import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      name: "登陆"
    },
    hidden: false
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: "登陆"
    },
    hidden: false,
    component: () => import('../views/Login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    // 这个不带 / ,带的话 会有问题
    redirect: '/home',
    meta: {
      name: "控制台"
    },
    hidden: true,
    component: () => import('../views/Layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          name: "首页"
        },
        component: () => import('../views/home.vue'),
    }]
  },
  {
    path: '/info',
    name: 'info',
    meta: {
      name: "项目管理"
    },
    hidden: true,
    component: () => import('../views/Layout/index.vue'),
    children: [
      {
        path: '/infoManage',
        name: 'infoManage',
        meta: {
          name: "信息管理"
        },
        component: () => import('../views/InfoManage.vue'),
      },{
        path: '/infoClassify',
        name: 'infoClassify',
        meta: {
          name: "信息分类"
        },
        component: () => import('../views/InfoClassify.vue'),
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/Layout/index.vue'),
    meta: {
      name: "用户管理"
    },
    hidden: true,
    children: [
      {
        path: '/userList',
        name: 'userList',
        meta: {
          name: "用户列表"
        },
        component: () => import('../views/UserList.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
