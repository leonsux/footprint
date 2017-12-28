<template>
  <div class="container">
    收藏
    <p v-for="item in goods">
      {{item}}
    </p>
    <h1>
      {{$store.state.count}}
    </h1>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'app-favorite',
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
      axios.get('/api/collections', {
        params: {}
      }).then((res) => {
        this.goods = res.data.items
        console.log(res)
      })
    }
  }
</script>

<style lang="scss">
  
</style>