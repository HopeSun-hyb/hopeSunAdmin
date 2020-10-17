import cookie from 'cookie_js'
import { login } from "@/api/login"
import router from '@/router'

const app = {
    namespaced: true,
    state: {
        isCollapse: JSON.parse(cookie.get("isCollapse") ? cookie.get("isCollapse") : null) || false,
        token: cookie.get("token") || null,
        userName: cookie.get("userName") || null,
    },
    // computed
    getters: {
        isCollapse: function (state) {
            return state.isCollapse;
        }

    },
    // 同步
    mutations: {
        SET_COLLAPSE: function (state) {
            state.isCollapse = !state.isCollapse
            cookie.set("isCollapse", JSON.stringify(state.isCollapse))
        },
        SET_TOKEN: function(state, data) {
            state.token = data;
            cookie.set("token", data)
        },
        SET_USERNAME:(state, data) => {
            state.userName = data;
            cookie.set("userName", data)
        }
    },
    actions: {
        // 登陆
        LOG_IN({state, commit}, data) {
            return new Promise((resolve, reject)=>{
                login(data).then(res=>{
                    console.log("res++++",res.data.username)
                    // 设置 token 和 用户名
                    commit("SET_TOKEN", res.data.token)
                    commit("SET_USERNAME", res.data.username)

                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        // 登出
        LOG_OUT({commit}) {
            return new Promise((resolve, reject)=>{
                // 清除token 
                commit("SET_TOKEN", "")
                router.push("/login")
                resolve()
            })
        }

    }
}

export default app