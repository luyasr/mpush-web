<template>
  <div>
    <a-breadcrumb class="layout-breadcrumb" :separator="shouldShowSeparator ? '/' : ''">
      <template v-for="item in $route.matched" :key="item.path">
        <a-breadcrumb-item v-if="topComponent(item.path)">
          <span>{{ item.meta.title }}</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-else>
          <router-link :to="item.path">
            {{ item.meta.title }}
          </router-link>
        </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

let $route = useRoute()

const topComponent = (path: string) => {
  const firstPath = $route.matched[0].path
  const lastPath = $route.matched[$route.matched.length - 1].path
  return firstPath === path || lastPath === path
}

const shouldShowSeparator = computed(() => {
  return $route.matched[0].path !== '/'
})
</script>

<style scoped lang="less">
.layout-breadcrumb {
  margin: 16px 0;
}
</style>
