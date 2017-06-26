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
      <Form-item label="角色" prop="usertype">
        <Radio-group v-model="formCustom.usertype">
          <Radio label="school">学校管理员</Radio>
          <Radio label="pro">项目负责人</Radio>
        </Radio-group>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
        <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
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
            this.USER_SIGNIN(this.formCustom)
            if (this.formCustom.usertype === 'school') {
              this.$router.push('/school')
            } else if (this.formCustom.usertype === 'pro') {
              this.$router.push('/pro')
            }
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>
