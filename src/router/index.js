import cookie from 'cookie_js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

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

// 白名单
const whiteRouter = ["/login"]
// 全局路由守卫
router.beforeEach((to, from, next)=> {
  // 本地有 token
  if(store.state.app.token) {
    // 防止通过非法进入 向 /login 再 /home
    if(to.path == "/login") {
      // 删除token
      store.commit("app/SET_TOKEN", "")
      next()
    } else {
      next()
    }
 
  } else {
    // 如果没有 token 进入登陆页面
    if(whiteRouter.includes(to.path)) {
      next()
    } else {
      next("/login")
    }
   
  }
  
})

export default router
