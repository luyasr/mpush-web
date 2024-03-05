<template>
  <a-menu theme="dark" mode="inline" @click="handleClick">
    <template v-for="item in menuList" :key="item.path">
      <!-- 路由隐藏 -->
      <template v-if="!item.meta.hideInMenu">
        <!-- 没有子路由 -->
        <a-menu-item v-if="!item.children" :key="item.path">
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </template>

      <!-- 有一个子路由 -->
      <a-menu-item v-if="item.children && item.children.length == 1" :key="item.children[0].path">
        <span>{{ item.children[0].meta.title }}</span>
      </a-menu-item>

      <!-- 有多个子路由 -->
      <a-sub-menu v-if="item.children && item.children.length > 1" :key="item.path">
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 递归组件 https://cn.vuejs.org/api/sfc-script-setup.html#recursive-components -->
        <Menu :menuList="item.children" />
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import router from '@/router'
import Menu from '@/layout/menu/MenuView.vue'

defineProps(['menuList'])
const handleClick = (e: any) => {
  router.push(e.key)
}
</script>

<style scoped lang="less"></style>
