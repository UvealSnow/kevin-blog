<template>
  <div class="post-tags">
    <g-link class="post-tags__tag"
      v-for="(tag, index) in tags"
      :key="index"
      :to="tag.path">#{{ tag.title }}</g-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      tags: Array
    }
  }
</script>

<style lang="scss">
.post-tags {
  @apply flex mt-2 mb-4;

  &__tag {
    @apply font-body bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-bold py-1 px-2 mr-2 rounded shadow;
  }
}
</style>