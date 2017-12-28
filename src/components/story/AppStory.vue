<template>
  <div class="container">
    故事
    <p v-for="item in goods">
      {{item}}
    </p>
    <h1>
      <button @click="add(10)">+++</button>
      {{$store.state.count}}
      <button @click="del">---</button>
    </h1>
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
    methods: {
      add (step) {
        // console.log(this.$store.state.count++)
        this.$store.commit('increment', step)
      },
      del () {
        this.$store.commit({
          type: 'decrement',
          params: {
            step: 5
          }
        })
      }
    },
    mounted () {
      // fetch('/api/datalist')
      // .then((res) => res.json())
      // .then((res) => {
      //   console.log(res)
      // })
      console.log(this.$store.state.count)
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