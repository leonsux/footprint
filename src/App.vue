<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <app-tab-bar></app-tab-bar>
  </div>
</template>

<script>
import AppTabBar from './components/tab-bar/AppTabBar'

export default {
  name: 'app',
  components: {
    AppTabBar
  }
}
</script>

<style>

</style>
