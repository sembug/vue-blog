<template>
  <div class="row">

      <div id="main" class="eight columns">
          <my-post :item="item"></my-post>
      </div> <!-- main End -->

      <sidebar />

    </div> <!-- end row -->
</template>

<script>
import Post from './Post'
import Sidebar from './Sidebar'

export default {
  name: 'PostPage',
  components:  {
      'sidebar': Sidebar,
      'my-post': Post,
  },  
data () {
    return {
      item: {
        id: 1,  
        title: 'Hey, We Love Open Sans!',
        body: 'Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam ',
        category: 'Sports',
        pub_date: '20010-01-01',
        author: 'Roberto',
        tags: [
            {
                id: 1,  
                name: 'Idea'
            }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
