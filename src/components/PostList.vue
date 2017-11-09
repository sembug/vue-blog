<template>
   	<div class="row">

   		<div id="main" class="eight columns">
           <my-post v-for="item in posts" :key="item.id" :item="item"></my-post>
   		</div> <!-- end main -->

   		<sidebar />

   	</div> <!-- end row -->


</template>

<script>
import Sidebar from './Sidebar'
import PostSummary from './PostSummary'

export default {
  name: 'PostList',
  components:  {
      'sidebar': Sidebar,
      'my-post': PostSummary,
  },  
  data () {
    return {
      posts: [
          {
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
      ]
    }
  }
}
</script>

