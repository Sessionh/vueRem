<style lang="less">
  @import './login.less';
</style>

<template>
  <div id="login" class="login" :style="note" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登陆
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName" :error="userName">
              <Input v-model="form.userName"  placeholder="请输入用户名">
              <span slot="prepend">
                                <Icon :size="16" type="person"></Icon>
                            </span>
              </Input>
            </FormItem>
            <FormItem prop="password" :error="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="14" type="locked"></Icon>
                </span>
              </Input>
            </FormItem>
            <div id="canvasShow" class="" style="display: none">
              <FormItem prop="verify">
                <Row>
                  <Col span="12">
                    <Input v-model.trim="form.verifyDate" style="width: 80%;top: 3px;" placeholder="请输入验证码"/>
                  </Col>
                  <Col span="12">
                    <canvas id="canvas" width="120" height="40" style="cursor: pointer" @click="canvasCli"></canvas>
                  </Col>

                </Row>
              </FormItem>
            </div>

            <FormItem>
              <Button @click="handleSubmit" type="primary" long :loading="loading">登录</Button>
            </FormItem>

          </Form>

        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import img from './images/logins22.jpg';
  import util from './router/util';
  export default {
    data () {
      const validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        let password = this.form.password;
        if (password === '') {
          callback(new Error('请输入密码'));
        } else if (password.length < 6 || password.length > 30) {
          callback(new Error('请输入大于6位,小于30位的密码'));
        } else {
          callback();
        }
      };
      const validateVerify = (rule, value, callback) => {
        let logs = this.loginOn;
        if (logs >= 3) {
          document.getElementById('canvasShow').style.display = 'inline';
          let code = this.code.toLowerCase();
          let verify = this.form.verifyDate.toLowerCase();
          if (verify === '' || verify === undefined) {
            callback(new Error('请输入验证码'));
          } else if (verify !== code && verify !== '') {
            callback(new Error('验证码错误'));
          } else {
            callback();
          }
        } else {
          callback();
        }
      };
      return {
        userName: '',
        password: '',
        loading: false,
        note: {
          backgroundImage: 'url(' + img + ')'
        },
        form: {
          userName: 'admin',
          password: '',
          verifyDate: ''
        },
        loginOn: 0,
        code: '',
        rules: {
          userName: [
            { validator: validateUser, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          verify: [
            { validator: validateVerify, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleSubmit () {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.userName = '';
            this.password = '';
            localStorage.setItem('userName', 'admin');
            this.getMenu();
          } else {
            if (this.loginOn >= 3) {
              this.demo();
            }
          }
        });
      },
      getMenu () {
          util.getRouterChildren(this);
          this.$router.push({
            name: 'home'
          });
      },
      demo () {
        let code;
        let $canvas = document.getElementById('canvas');
        function createCode () {
          // canvas准备中
          let ctx = $canvas.getContext('2d');
          let width = $canvas.width;
          let height = $canvas.height;
          // 清空画布
          ctx.clearRect(0, 0, width, height);
          // 上背景色
          ctx.fillStyle = '#f2f2f2';
          ctx.fillRect(0, 0, width, height);
          ctx.fillStyle = '#3297fd';
          // 初始化翻转值
          let flip = 1;
          ctx.font = "italic bolder 20px 'Arial'";

          // 清空code
          code = '';
          // 验证码的长度
          let codeLength = 6;
          // 所有候选组成验证码的字符，当然也可以用中文的
          let codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
          // 在数组中任意选择6个字
          for (let i = 0; i < codeLength; i++) {
            // 获取数组中随机一个字
            let charNum = Math.round( Math.random() * (codeChars.length-1) );
            // 将code累加
            code += codeChars[charNum];
            // 描绘canvas
            // 翻转正负用于计算rotate
            flip = i%2?-1:1;
            ctx.save();
            ctx.rotate(Math.round(3 * Math.random()) * flip * Math.PI / 180);
            ctx.fillText(codeChars[charNum], (width * (0.1 + 0.14 * i)), 22 + Math.round(8 * Math.random()));
            ctx.restore();
          }
        }
        createCode();
        this.code = code;
      },
      canvasCli () {
        this.demo();
      }
    },
    mounted () {
      this.demo();
    },
    created () {
    }
  };
</script>
