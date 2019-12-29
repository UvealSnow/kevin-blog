<template>
  <div class="flex pt-3">
    <g-link class="font-body bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-1 px-2 mr-2 rounded shadow"
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