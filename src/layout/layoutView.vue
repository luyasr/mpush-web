<template>
    <a-layout-header class="layout-header">
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="layout-menu">
        <Menu />
      </a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
</template>

<script setup lang="ts">
import Header from '@/layout/header/headerView.vue'
import Menu from '@/layout/menu/menuView.vue'
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100vh;
  background-color: #c1c1c1;
}

.layout-header {
  width: 100%;
  height: 60px;
  background-color: #c6edc1;
}

.layout-menu {
  width: 200px;
  height: calc(100vh - @layout-header-height);
  background-color: #edc4e4;
}
</style>
