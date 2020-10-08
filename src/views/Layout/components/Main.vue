<template>
    <div id="mainLayout">
        <router-view/>
    </div>
    
</template>

<script>
export default {
    name: "mainLayout"
}
</script>

<style lang="scss" scoped> 
#mainLayout {
    position: absolute;
    top: 70px;
    right: 0;
    bottom: 0;
    background: $backgroundWhite;
    @include set-transition(left , 1s);
}
.open {
    #mainLayout {
        left: $navWidth + 10px;
    }
}

.close {
    #mainLayout {
        left: $navWidthMin +10px;
    }
}

</style>