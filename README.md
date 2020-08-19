# backstage-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
# ????
## 1.1 在vue.config.js 配置全局样式  css:{}.....
## 1.2 创建login页面 和 路由设置
## 1.3 重定向到 login   re
## 1.4 将路由文件单独放在 一个文件夹中
## 1.5 删除  只剩 login组件 ，和登录路由
## 1.6 引入element
## 1.7 class 绑定的方式 （截图）
## 1.8 登录和注册按钮的切换

# 2020.8.2
## 1.1 form 布局  （邮箱，密码，获取验证码和框，登录）
## 1.2 验证（邮箱）【username, password, code】
## 1.3 新建 utils (工具文件夹)  过滤特殊字符  export 暴露出去
## 1.4 配置项目别名， 配置省略 后缀
## 1.5 验证邮箱 验证密码 提取出来（多个判断）
## 1.6 增加 重复密码   点击注册隐藏起来
## 1.7 2.0 转3.0 感觉暂时不需要学
## 1.8 安装axios  在utils中定义拦截器request.js ，创建api文件夹，api 分模块管理
## 1.9 获取验证码
## 2.0 环境变量 vue (development, production,test)
## 2.1 baseUrl timeout   http://www.web-jshtml.cn/productapi/token  options(request methods 跨域)  /devAPi/getSms

## 2.2 跨域
## 2.3 登陆和注册按钮分别显示

# 2020.8.10
## 1.1 验证码输入前 提交禁用
## 1.2 在获取验证码前，要判断邮箱是否为空，并 提示
## 1.3 拦截 resCode，进行判断, 单独引用弹出框
## 1.4  .then(res =>{})  .catch(err=>{ })
## 1.5 点击注册  和  登陆 清空表单
## 1.6 请求数据时 验证码 按钮禁用   修改按钮显示的值 获取验证码--》发送中  倒计时方法  setInterval()
## 1.7 在获取验证码等待过程中，再次点击获取验证码的bug  清除定时器
## 1.8 base64 md5 sha1  js-sha1 加密
## 1.9 请求拦截器中添加 请求头 config.headers
## 2.0 代码规整  1. 一个函数做一件事情  2.将相同代码封装到一个函数中

