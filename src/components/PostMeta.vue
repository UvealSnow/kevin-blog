<template>
  <p class="font-body text-xs pt-2">Posted {{ date }}. <span class="font-bold">{{ ttr }} min read.</span></p>
</template>

<script type="text/javascript">
  export default {
    props: {
      date: String,
      ttr: String|Number
    }
  }
</script>