<template>
  <div class="hello">
    <a href="'#/regulatories/">back</a>
    <h1> {{regulatory.title}}</h1>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      regulatory: (state) => state.regulatory.regulatories
        .find((entry) => entry.id === state.route.params.id),
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
}
li {
  text-align: left;
}
a {
  color: #42b983;
}
</style>
