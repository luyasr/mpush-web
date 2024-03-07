<template>
  <div>
    <span>首页</span>
    <span>Welcome {{ userStore.username }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/modules/user'

const userStore = useUserStore()
// 挂载页面之前获取用户信息
onMounted(() => {
  try {
    userStore.queryUser()
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped lang="less">
</style>