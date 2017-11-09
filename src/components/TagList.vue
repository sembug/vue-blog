<template>
    <div class="widget widget_tags">
        <h3>Post Tags.</h3>
        <div class="tagcloud group" :key="item.id" v-for="item in tags">
            <a href="#">{{item.name}}</a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TagList',
  data () {
    return {
      tags: [{
        id: 1,  
        name: 'Idea'
      }]
    }
  }
}
</script>