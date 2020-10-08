<template>
    <div id="nav">
        <el-menu 
            default-active="1-4-1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            :collapse="isCollapse"
            background-color= "transparent"
            text-color="#ffffff"
            router
        >   
            <!-- 借助 template，使v-for 和 v-if 不在一起 -->
            <template v-for="(item, index) in routes">
                <el-submenu :index = "index+''" :key="index" v-if="item.hidden">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{item.meta.name}}</span>
                    </template>

                    <el-menu-item :index="item.path" v-for="(item, index) in item.children" :key="index">{{item.meta.name}}</el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            routes: []
        }
    },

    created() {
        // 初始化路由数据
        this.initRoutes();
        
    },
    computed: {
        isCollapse:function() {
            console.log("isCollapse+++",this.$store.state.isCollapse)
            return this.$store.state.isCollapse
        }
    },
    methods: {
      // initRoutes
      initRoutes() {
        this.routes = this.$router.options.routes;
      },

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },

      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    
}
</script>

<style lang="scss" scoped>
#nav {
    position: fixed;
    height: 100%;
    background: #344a5f;
    @include set-transition(width , 1s);
}

.open {
    #nav {
        width: $navWidth;
    }
}

.close {
    #nav {
        width: $navWidthMin;
    }
}

.el-menu-vertical-demo  /deep/ .is-active.is-opened .el-submenu__title{
    background: #f56c6c !important;
}

.el-menu-vertical-demo.el-menu {
    border-right: none;
}
</style>