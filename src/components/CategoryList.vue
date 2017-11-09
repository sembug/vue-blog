<<template>
    <div class="widget widget_categories group">
        <h3>Categories.</h3>
        <ul>
            <li v-for="item in categories" :key="item.id">
                <a href="#" title="">{{ item.name }}</a> ({{ item.posts.length }})
            </li>
        </ul>
    </div>
</template>

<<script>

export default {
  name: 'CategoryList',
  data () {
    return {
      categories: [{
        id: 1,  
        name: 'Sports',
        posts: []
      }]
    }
  }
}
</script>