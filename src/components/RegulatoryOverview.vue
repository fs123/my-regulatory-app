<template>
  <div id = "regulatoryOverview" class="hello">
    <ul>
      <li v-for="regulatory in regulatories" v-bind:key="regulatory.number">
        <a :href="'#/regulatory/' + regulatory.id">
        <b>{{regulatory.number}}</b>
        {{regulatory.title}}</a>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      regulatories: (state) => state.regulatory.regulatories,
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
  text-align: center;
}
a {
  color: #42b983;
}
</style>
