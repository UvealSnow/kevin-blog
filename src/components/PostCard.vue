<template>
  <div class="w-full" :class="{ 'mt-8' : $vnode.key > 0 }">
    <g-link class="font-display text-2xl hover:text-orange-600" :to="post.path">{{ post.title }}</g-link>
    <p class="font-body text-md" v-text="post.excerpt"></p>

    <!-- {{ post.coverImage }} -->

    <PostMeta :published-at="post.publishedAt" :ttr="15" />

    <PostTags :tags="post.tags" />
  </div>
</template>

<script type="text/javascript">
  import PostMeta from '~/components/PostMeta.vue'
  import PostTags from '~/components/PostTags.vue'

  export default {
    props: {
      post: Object
    },

    components: {
      PostMeta,
      PostTags
    }
  }
</script>