<template>
  <div id="login">
    <!-- 登陆框 -->
    <div class="logo-box">
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
          <el-row :gutter="20">
            <el-form-item label="验证码" prop="code">
              <el-col :span="18">
                <el-input v-model="ruleForm.code"></el-input>
              </el-col>
              <el-col :span="5">
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


   
  </div>
</template>

<script>
import {validateEmail} from 'utils/validate.js'
import {getSms,login} from "@/api/login"
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

    let validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        callback();
      }
    };

    return {
      // 注册
      model: 'login',

      // 登陆框
      ruleForm: {
        username: '2425368483@qq.com',
        password: '123456',
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
  
        code: [
          { validator: validateCode, trigger: 'blur' }
        ]
      }
    }
  },

  created(){

  },

  methods: {
    // 获取验证码
    async getCode() {
        let param = {username:this.ruleForm.username, module: 'register'}
        let res = await getSms(param)
        let message = res.message;
        this.ruleForm.code = message.substring(message.length - 6) 

    },

    // 表单提交
     submitForm(formName) {
      this.$refs[formName].validate(async (valid) =>  {
        if (valid) {
          let res = await login(this.ruleForm)
          if(res.resCode==0) {
            this.$router.push({path: '/layout'})
          }
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url("~@/assets/img/logoBg.jpg") no-repeat;
  background-size: 100% 100%;
}
.logo-box {
  width: 500px;
  padding: 40px;
  background: #ffffff;
}
</style>
