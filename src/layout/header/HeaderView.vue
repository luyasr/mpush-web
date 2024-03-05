<template>
  <div class="header">
    <div class="header-left">
      <span>VIP</span>
    </div>
    <div class="header-right">
      <a-dropdown>
        <a-avatar size="large">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <template #overlay>
          <a-menu @click="onClick">
            <a-menu-item key="1">个人中心</a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">退出登录</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuProps } from 'ant-design-vue'

const onClick: MenuProps['onClick'] = ({ key }) => {
  console.log(`Click on item ${key}`)
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
}

.header-right > * {
  /* 设置内容间隔为 10 像素 */
  margin-right: 10px;
}
</style>
