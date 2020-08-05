<template>
  <div id="login">
    <ul class="login-title">
      <li :class="{active: isActive == index}" v-for="(item, index) in loginTitle" :key="item.id" @click="handlLoginReg(index)">
        {{ item.text }}
      </li>
    </ul>
   
  </div>
</template>

<script>
export default {
  name:"Login",
  data() {
    return {
      isActive: 0,
      loginTitle: [
        {text:"登陆"},
        {text:"注册"}
      ]
      
    }
  },

  methods: {
    handlLoginReg(index){
      this.isActive = index;
    }
  },
}
</script>
<style lang="scss" scoped>
#login {
  height: 100%;
  background: #eeeeee
}

.login-title {
   text-align: center;
   li {
     margin: 0 5px;
     padding: 2px 5px;
     cursor: pointer;
   }
   .active {
     background:#000;
     color:#fff;
   }
  
}
</style>
