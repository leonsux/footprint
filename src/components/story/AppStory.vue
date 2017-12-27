<template>
  <div class="container">
    故事
    <p v-for="item in goods">
      {{item}}
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'app-story',
    data () {
      return {
        goods: []
      }
    },
    mounted () {
      // fetch('/api/datalist')
      // .then((res) => res.json())
      // .then((res) => {
      //   console.log(res)
      // })
      axios.get('/api/stories', {
        params: {}
      }).then((res) => {
        this.goods = res.data.goods
        console.log(res)
      })
    }
  }
</script>

<style lang="scss">
  
</style>