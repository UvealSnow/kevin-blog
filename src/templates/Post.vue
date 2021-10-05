<template>
  <Layout>
    <h1 class="font-display text-4xl pb-4" v-text="$page.post.title"></h1>

    <PostMeta :date="$page.post.date" :ttr="$page.post.timeToRead" />

    <PostTags :tags="$page.post.tags" />

    <div class="py-8 font-body" v-html="$page.post.content"></div>
  </Layout>
</template>

<script>
  import PostMeta from '~/components/PostMeta.vue'
  import PostTags from '~/components/PostTags.vue'

  export default {
    components: {
      PostMeta,
      PostTags
    },

    metaInfo () {
      return {
        title: this.$page.post.title,
        meta: [
          {
            name: 'description',
            content: this.$page.post.description
          }
        ]
      }
    }
  }
</script>

<page-query>
  query getPost ($slug: String) {
    gcms {
      post(where: { slug: $slug }) {
        slug
        title
        date
        excerpt
        coverImage {
          url
        }
      }
    }
  }
</page-query>

<style type="text/css">
  pre {
    margin: 16px 0;
    font-size: .7rem;
    max-height: 300px;
    overflow: scroll;
    padding: 18px 36px;
    background: #feebc8;
    border-radius: .5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  h4 {
    font-weight: bold;
    padding: 2rem 0 .5rem 0;
    font-size: 1.25rem;
  }

  .font-body p {
    font-size: 1rem;
    padding: .5rem 0;
    line-height: 1.5rem;
  }
</style>