<template>
  <div class="layout-logo" v-if="!config.hideInLogo">
    <img :src="config.logo" alt="" />
    <span>{{ config.title }}</span>
  </div>
</template>

<script setup lang="ts">
import config from '@/config/config'
</script>

<style scoped lang="less">
.layout-logo {
  display: flex;
  height: 32px;
  width: 160px;
  margin: 8px 15px;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  /* 隐藏溢出部分 */

  img {
    display: flex;
    width: 25px;
    height: 25px;
    margin-left: 20px;
    align-items: center;
    /* 防止 img 被压缩 */
    flex-shrink: 0;
  }

  span {
    font-size: @layout-menu-logo-font-size;
    margin-left: 20px;
    /* 隐藏溢出部分 */
    overflow: hidden;
    /* 防止文本换行 */
    white-space: nowrap;
    /* 截断文本内容 */
    text-overflow: ellipsis;
    font-weight: normal;
    box-sizing: border-box;
    /* 调整菜单项的宽度 */
    width: 100%;
  }
}
</style>
