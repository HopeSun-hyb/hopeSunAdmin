<template>
  <div id="login">
    <!-- 登陆和注册 -->
    <ul class="login-title">
      <li :class="{active: isActive == index}" v-for="(item, index) in loginTitle" :key="item.id" @click="handlLoginReg(index, item)">
        {{ item.text }}
      </li>
    </ul>

    <!-- 登陆框 -->
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-form-item label="账号" prop="username">
          <el-col :span="24">
            <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-col :span="24">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="重复密码" prop="password2" v-if="model=='register'">
          <el-col :span="24">
            <el-input type="password" v-model="ruleForm.password2" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-row :gutter="20">
          <el-form-item label="验证码" prop="code">
            <el-col :span="18">
              <el-input v-model="ruleForm.code"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" class="code" @click="getCode">获取验证码</el-button>
            </el-col>
          </el-form-item>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>



   
  </div>
</template>

<script>
import {validateEmail} from 'utils/validate.js'
import request from '../utils/request'
export default {
  name:"Login",
  data() {
    // 表单验证
    let validateUsername = (rule, value, callback) => {
      if (!value) {
       callback(new Error('账号不能为空'));
      } else if(!validateEmail(value)){
        callback(new Error('账号不是邮箱格式'));
      } else {
        callback();
      }

    };

    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    let validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        callback();
      }
    };

    return {
      // 登陆和注册
      isActive: 0,
      loginTitle: [
        {text:"登陆", model: 'login'},
        {text:"注册", model: 'register'}
      ],
      // 注册
      model: 'login',

      // 登陆框
      ruleForm: {
        username: '',
        password: '',
        password2: '',
        code: ''
      },
      // 登陆框验证
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        code: [
          { validator: validateCode, trigger: 'blur' }
        ]
      }
    }
  },

  created(){
    const BASEURL = process.env.VUE_APP_API
    console.log(BASEURL);
    debugger
  },

  methods: {
    // 切换登陆和注册
    handlLoginReg(index, item){
      this.isActive = index;
      // 密码验证显示和隐藏
      this.model = item.model
    },

    // 获取验证码
    getCode() {
      let param = {username:this.ruleForm.username, module: 'register'}
      request.post('/getSms/', param)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     

    },

    // 表单提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 表单重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
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

.demo-ruleForm {
  margin: 0 auto;
  width: 50%;
  .code{
    width: 100%;
  }
}
</style>
