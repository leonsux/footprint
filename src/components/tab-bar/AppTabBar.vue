<template>
  <div class="tab-bar">
    <ul>
      <router-link tag="li" :to="{name: 'AppBrowse'}">
        <span>浏览</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppStory'}">
        <span>故事</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppFavorite'}">
        <span>收藏</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppMessage'}">
        <span>消息</span>
      </router-link>
      <router-link tag="li" :to="{name: 'AppMine'}">
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  
  export default {
    name: 'app-tab-bar'
  }
</script>

<style>
  
</style>