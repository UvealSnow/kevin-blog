<template>
  <div class="flex flex-col md:flex-row">
    <sidebar />

    <div class="py-20 px-8 md:py-8 h-screen max-w-xl flex-shrink overflow-y-auto">
      <slot/>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Sidebar from '~/components/Sidebar.vue'

  export default {
    components: {
      Sidebar
    }
  }
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style>
  /**/
</style>
