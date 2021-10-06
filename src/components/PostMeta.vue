<template>
  <p class="font-body text-xs pt-2">Posted {{ publishedAt }}. <span class="font-bold">{{ ttr }} min read.</span></p>
</template>

<script type="text/javascript">
import * as moment from 'moment';

export default {
  props: {
    createdAt: String,
    ttr: String|Number
  },

  computed: {
    publishedAt() {
      return moment(this.createdAt).format('LL');
    },
  },
};
</script>