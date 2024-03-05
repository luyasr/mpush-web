<template>
  <div class="login-wrapper">
    <div class="login-container">
      <a-form :model="formState" name="login" autocomplete="off" :rules="rules" @finish="onFinish">
        <a-form-item name="username">
          <a-input v-model:value="formState.username" placeholder="用户名">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password v-model:value="formState.password" placeholder="密码">
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>
        <div class="button-container">
          <a-button type="primary" html-type="submit" :loading="loading">登录</a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { UnwrapRef } from 'vue'
import router from '@/router'
import type { LoginRequest } from '@/types/user'
import type { Rule } from 'ant-design-vue/es/form'
import { useTokenStore } from '@/stores/modules/token'

const tokenStore = useTokenStore()
const loading = ref(false)
const formState: UnwrapRef<LoginRequest> = reactive({
  username: '',
  password: ''
})
const onFinish = async () => {
  try {
    loading.value = true
    await tokenStore.login(formState)
    // 登录成功跳转到首页
    router.push({ name: 'home' })
  } catch (error) {
    console.error('error', error)
  } finally {
    loading.value = false
  }
}
const rules: Record<string, Rule[]> = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
}
</script>

<style scoped lang="less">
.login-wrapper {
  min-width: 100%;
  min-height: 100vh;
  position: relative;

  .login-container {
    display: flexbox;
    width: 350px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
  }

  .button-container {
    margin-top: 20px;
  }
}
</style>
