<template>
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    width="400px"
    @close="onDialogClose"
    append-to-body
  >

    <el-form :model="loginFormModel"
             :rules="rules"
             ref="form"
             label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginFormModel.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginFormModel.password"></el-input>
      </el-form-item>

      <div class="login-btn-group">
        <el-button @click="openSignUpDialog">注册</el-button>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
  import {mapActions, mapGetters}  from 'vuex';
  import UserTypes, {namespace as UserNamespace} from '@/store/User/types';


  export default {
    name    : "LoginFormDialog",
    props   : {
      visible: {
        type   : Boolean,
        default: false
      }
    },
    data() {
      const checkUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (!this.isSignUpUser(value)) {
          callback(new Error('该用户不存在'));
        } else {
          callback();
        }
      };

      const checkPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!this.passwordCheck(this.loginFormModel)) {
          callback(new Error('用户名与密码不匹配'));
        } else {
          callback();
        }
      };

      return {
        loginFormModel: {
          username: '',
          password: '',
        },
        rules         : {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {validator: checkUsername, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {validator: checkPassword, trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      ...mapGetters(UserNamespace, {
        isSignUpUser : UserTypes.GETTER.IS_SIGN_UP_USER,
        passwordCheck: UserTypes.GETTER.PASSWORD_CHECK
      }),

      dialogVisible: {
        get() {
          return this.visible;
        },
        set(val) {
          this.$emit('update:visible', val);
        }
      }
    },
    methods : {
      ...mapActions(UserNamespace, {
        login: UserTypes.ACTION.LOGIN
      }),

      openSignUpDialog() {
        this.dialogVisible = false;
        this.$emit('open-sign-up-dialog');
      },

      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.login(this.loginFormModel);
            this.dialogVisible = false;
          } else {
            return false;
          }
        });
      },

      onDialogClose() {
        this.loginFormModel = {
          username: '',
          password: ''
        }
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss" scoped>
  .login-btn-group {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;

    .el-button {
      width: 40%;
    }
  }
</style>
