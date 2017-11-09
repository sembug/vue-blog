<template>
  <article class="entry">
        <header class="entry-header">
            <h2 class="entry-title">
                <a :href="postUrl" :title="item.title">{{ item.title }}</a>
            </h2>

            <div class="entry-meta">
                <ul>
                    <li>{{ item.pub_date }}</li>
                    <span class="meta-sep">&bull;</span>
                    <li><a href="#" title="" rel="category tag">{{ item.category }}</a></li>
                    <span class="meta-sep">&bull;</span>
                    <li>{{ item.author }}</li>
                </ul>
            </div>

        </header>

        <div class="entry-content">
            {{ item.body }}
            <p><a :href="postUrl">More</a></p>
        </div>
    </article>
</template>
<<script>
    export default {
        name: 'Post',
        props: ['item'],
        data () {
            return {
            }
        },
        computed: {
            postUrl() {
                return '/post/' + this.item.id 
            }
        }

    }
</script>
