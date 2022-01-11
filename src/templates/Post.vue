<template>
  <Layout class="post">
    <h1 class="post__title" v-text="$page.gcms.post.title"></h1>

    <PostMeta
      class="post__meta"
      :published-at="$page.gcms.post.publishedAt"
      :ttr="15"
    />

    <PostTags class="post__tags" :tags="[{ title: 'Loquilla', path: ''}]" />

    <div class="post__content" v-html="$page.gcms.post.content.html" />
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
        title: this.$page.gcms.post.title,
        meta: [
          {
            name: 'description',
            content: this.$page.gcms.post.excerpt,
          }
        ],
      };
    },
  }
</script>

<page-query>
query getPost($slug: String) {
  gcms {
    post(where: { slug: $slug }) {
      slug
      title
      excerpt
      publishedAt
      seo {
        title
        description
        image {
          id
          url
        }
      }
      content {
        html
      }
      coverImage {
        url
      }
      author {
        id
        name
        posts(where: { NOT: { slug: $slug } }) {
          slug
          title
          excerpt
          coverImage {
            url
          }
        }
      }
    }
  }
}
</page-query>

<style lang="scss" type="text/css">
.post {
  &__title {
    @apply text-4xl font-bold font-display;
  }

  &__meta {
    @apply text-sm font-display;
  }
}
</style>