<template>
  <Layout>
    <h1 class="font-display text-4xl pb-4">My blog</h1>

    <PostCard v-if="$page.allPost.edges.length > 0" v-for="(edge, index) in $page.allPost.edges" :post="edge.node" :key="index" />

    <NoPosts v-else />

    <Pager class="flex mt-8" :info="$page.allPost.pageInfo"/>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    allPost(perPage: 4 page: $page, filter: { published: { eq: true } }) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          date (format: "D. MMMM YYYY")
          timeToRead
          description
          path
          tags {
            id
            title
            path
          }
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
      title: `My blog`
    }
  }
</script>

<style type="text/css">
  /**/
</style>