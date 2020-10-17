<template>
    <div id="header">
        <div class="header-wrapper">
            <div class="left" @click="isCollapse"><i class="el-icon-s-fold"></i></div>
            <div class="right">
                <img src="~@/assets/img/userName.jpg" alt="">
                <span class="userName">{{userName}}</span>
                <i class="el-icon-switch-button logout" @click="logout"></i>
            </div>
        </div>
    </div> 
</template>
<script>
import cookie from 'cookie_js'
export default {
    name: 'Header',
    created() {
    
       
    },
    methods:{
        // 收缩
        isCollapse(){
            this.$store.commit("app/SET_COLLAPSE")
         
        },

        // 退出登陆
        logout() {
            this.$store.dispatch("app/LOG_OUT")
        }
    },

    computed: {
        userName: function() {
            return this.$store.state.app.userName;
        }
    }
    
}
</script>

<style lang="scss" scoped>
#header {
    position: fixed;
    top: 0;
    right: 0;
    height: 60px;
    background: #ffffff;
    @include set-transition(left , 1s);
    .header-wrapper {
        position: relative;
        height: 100%;
        .left {
            position: absolute;
            left: 10px;
            font-size: 28px;
            margin-top: 10px;
            cursor: pointer;
        }
        .right {
            position: absolute;
            right: 10px;
            display: flex;
            justify-items: center;
            align-items: center;
            top: 0;
            bottom: 0;
            img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 10px;
            }
            .userName {
                margin-right: 10px;
            }
            .logout {
                font-size: 25px;
                cursor: pointer;
            }
        }
    }
}

.open {
    #header {
        left: $navWidth;
    }
}

.close {
    #header {
        left: $navWidthMin;
    }
}
</style>