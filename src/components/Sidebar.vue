<<template>
  <div id="sidebar" class="four columns">

    <div class="widget widget_search">
      <h3>Search</h3>
      <form action="#">

         <input type="text" value="Search here..." onblur="if(this.value == '') { this.value = 'Search here...'; }" onfocus="if (this.value == 'Search here...') { this.value = ''; }" class="text-search">
         <input type="submit" value="" class="submit-search">

      </form>
   </div>
    <category-list />

    <tag-list />

</div> <!-- end sidebar -->

</template>

<script>
import CategoryList from './CategoryList'
import TagList from './TagList'


export default {
    name: 'Sidebar',
    components:  {
      'category-list': CategoryList,
      'tag-list': TagList,
    },  
}
</script>

