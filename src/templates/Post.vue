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

  &__content {
    @apply overflow-hidden;

    p {
      @apply pb-2 relative;
      z-index: -1;
    }

    pre {
      @apply block whitespace-pre font-display text-xs;

      code {
        @apply bg-black text-white w-full block
          p-5 my-4;
      }
    }

    blockquote {
      @apply bg-yellow-100
        text-lg font-display
        my-2 py-5 pl-6 pr-4
        border-l-2 border-yellow-500;
      line-height: 1.35;
    }

    ol {
      @apply list-decimal pl-4;
    }

    ul {
      @apply list-disc pl-4;
    }
  }
}
</style>