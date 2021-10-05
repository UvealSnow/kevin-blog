<template>
  <Layout>
    <h1 class="font-display text-4xl pb-4">Home</h1>

    <!-- <PostCard v-if="$page.allPost.edges.length > 0" v-for="(edge, index) in $page.allPost.edges" :post="edge.node" :key="index" />

    <NoPosts v-else /> -->

    <!-- <Pager class="flex mt-8" :info="$page.allPost.pageInfo"/> -->
  </Layout>
</template>

<page-query>
{
  gcms {
    posts(orderBy: date_DESC) {
      title
      slug
      coverImage {
        url
      }
    }
  }
}
</page-query>

<script>
  import { Pager } from 'gridsome'
  import NoPosts from '~/components/NoPosts.vue'
  import PostCard from '~/components/PostCard.vue'

  export default {
    components: {
      Pager,
      NoPosts,
      PostCard
    },

    metaInfo: {
      title: `Hello, I'm Kevin!`
    }
  }
</script>

<style type="text/css">
  /**/
</style>
