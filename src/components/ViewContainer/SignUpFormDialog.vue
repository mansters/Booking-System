<template>
  <el-dialog
    title="注册"
    :visible.sync="dialogVisible"
    width="400px"
    @close="onDialogClose"
    append-to-body
  >

    <el-form :model="signUpFormModel"
             :rules="rules"
             ref="form"
             label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="signUpFormModel.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="signUpFormModel.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input type="password" v-model="signUpFormModel.repassword"></el-input>
      </el-form-item>

      <div class="sign-up-btn-group">
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
  import {mapActions, mapGetters}                from 'vuex';
  import UserTypes, {namespace as UserNamespace} from '@/store/User/types';


  export default {
    name    : "SignUpFormDialog",
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
        } else if (this.isSignUpUser(value)) {
          callback(new Error('当前用户名已存在'));
        } else {
          callback();
        }
      };

      const checkRepassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (this.signUpFormModel.password !== value) {
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };

      return {
        signUpFormModel: {
          username  : '',
          password  : '',
          repassword: ''
        },
        rules          : {
          username  : [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {validator: checkUsername, trigger: 'blur'}
          ],
          password  : [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
          repassword: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validator: checkRepassword, trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      ...mapGetters(UserNamespace, {
        isSignUpUser : UserTypes.GETTER.IS_SIGN_UP_USER
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
        signUp: UserTypes.ACTION.SIGN_UP
      }),

      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            const {username, password} = this.signUpFormModel;
            this.signUp({username, password});
            this.dialogVisible = false;
          } else {
            return false;
          }
        });
      },

      onDialogClose() {
        this.signUpFormModel = {
          username  : '',
          password  : '',
          repassword: ''
        }
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss" scoped>
  .sign-up-btn-group {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;

    .el-button {
      width: 90%;
    }
  }
</style>
