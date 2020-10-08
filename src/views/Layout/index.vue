<template>
    <div id="layout" :class="[isCollopse ? 'close':'open']">
        <LayoutHeader/>
        <LayoutNav/> 
        <LayoutMain/>  
    </div> 
</template>
<script>
import LayoutNav from './components/Nav'
import LayoutHeader from './components/Header'
import LayoutMain from './components/Main'
export default{
    name: "Layout",
    components: {
        LayoutNav,
        LayoutHeader,
        LayoutMain
    },
    computed:{
        isCollopse: function() {
            return this.$store.state.isCollapse
        }
    }
}
</script>

<style lang="scss" scoped>
#layout {
    position: relative;
    height: 100%;
    background: #f7f7f7;
}
</style>