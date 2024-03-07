<template>
  <a-layout class="layout-container">
    <a-layout>
      <a-layout-sider class="layout-menu" v-model:collapsed="collapsed" collapsible>
        <Logo />
        <Menu :menuList="routeStore.getRoutes"> </Menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="layout-header">
          <Header />
        </a-layout-header>
        <a-layout-content class="layout-content">
          <BreadCrumb />
          <div class="content">
            <Main />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Header from '@/layout/header/HeaderView.vue'
import Logo from '@/layout/logo/LogoView.vue'
import Menu from '@/layout/menu/MenuView.vue'
import BreadCrumb from '@/layout/breadcrumb/BreadcrumbView.vue'
import Main from '@/layout/main/MainView.vue'
import { ref } from 'vue'
import { useRouteStore } from '@/stores/modules/router'

let routeStore = useRouteStore()
const collapsed = ref<boolean>(false)
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
}

.layout-header {
  display: flex;
  background: #fff;
  padding: 0;
  height: 64px;
  z-index: 10;
}

.layout-content {
  margin: 0 16px;
}

.content {
  padding: 24px;
  background: #fff;
  min-height: 90%;
}
</style>
