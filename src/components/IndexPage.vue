<template>
  <post-list />
</template>

<script>
import PostList from './PostList'

export default {
  name: 'IndexPage',
  components:  {
      'post-list': PostList
  },  
  data () {
    return {
      msg: 'page'
    }
  }
}
</script>

<style scoped>

</style>