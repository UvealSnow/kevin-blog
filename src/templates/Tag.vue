<template>
  <Layout>
    <h1 class="font-display text-4xl pb-4">#{{ $page.tag.title }}</h1>

    <PostCard v-for="(edge, index) in $page.tag.belongsTo.edges" :post="edge.node" :key="index" />

    <Pager class="flex mt-8" :info="$page.tag.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
  query Tag ($id: ID! $page: Int) {
    tag: tag (id: $id) {
      id
      title
      path
      belongsTo (perPage: 4 page: $page) @paginate {
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Post {
              id
              title
              path
              date (format: "D. MMMM YYYY")
              timeToRead
              description
              content
              tags {
                id
                title
                path
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script type="text/javascript">
  import { Pager } from 'gridsome'
  import PostCard from '~/components/PostCard.vue'

  export default {
    components: {
      Pager,
      PostCard
    }
  }
</script>
