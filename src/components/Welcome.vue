<style scoped lang="less">
  .login{
    width: 450px;
    height: 700px;
    form{
      width: 400px;
      padding: 20px;
      height: 400px;
      position: relative;
      top: 100px;
    }
  }
</style>
<template>
  <div class="login">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">

      <Form-item label="用户名" prop="username">
        <Input type="text" v-model="formCustom.username"></Input>
      </Form-item>
      <Form-item label="密码" prop="passwd">
        <Input type="password" v-model="formCustom.passwd"></Input>
      </Form-item>
      <!--<Form-item label="角色" prop="usertype">-->
        <!--<Radio-group v-model="formCustom.usertype">-->
          <!--<Radio label="school">学校管理员</Radio>-->
          <!--<Radio label="pro">项目负责人</Radio>-->
        <!--</Radio-group>-->
      <!--</Form-item>-->
      <Form-item>
        <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
        <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">取消</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNIN } from '../store/user'

  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        }
        callback()
      }
      const validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        }
        callback()
      }
      return {
        formCustom: {
          passwd: '',
          username: '',
          usertype: 'school'
        },
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      ...mapActions([USER_SIGNIN]),
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let rights = this.$store.state.rights
            let f = true
            let t = -1
            for (var x in rights) {
              var tmp = rights[x]
              if (this.formCustom.username === tmp.no) {
                f = true
                if (tmp.rights.indexOf(4) !== -1 || tmp.rights.indexOf('4') !== -1) {
                  t = 1
                } else if (tmp.rights.indexOf(16) !== -1 || tmp.rights.indexOf('16') !== -1) {
                  t = 2
                } else {
                  t = -1
                }
                break
              }
              f = false
            }
            if (f) {
              if (t === 2) {
                this.formCustom.usertype = 'school'
                this.USER_SIGNIN(this.formCustom)
                this.$router.push('/school')
              } else if (t === 1) {
                this.formCustom.usertype = 'pro'
                this.USER_SIGNIN(this.formCustom)
                this.$router.push('/pro')
              } else {
                this.$Message.error('登录失败!')
              }
            } else {
              this.$Message.error('登录失败2!')
            }
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>
