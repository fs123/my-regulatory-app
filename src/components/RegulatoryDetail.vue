<template>
  <div class="hello" style="min-width: 98%">
    <v-card>
      <v-card-title>
        {{regulatory.number}} | {{regulatory.title}}
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          v-if="false"
        ></v-text-field>
      </v-card-title>
    <v-container style="min-width: 100%">
      <v-row no-gutters>
        <v-col md="2">
          <RegulatoryDetailContentTree :regulatory="regulatory" />
        </v-col>
        <v-col md="10">
          <v-container class="">
            <RegulatoryDetailContentPart :contentElements="regulatory.content" />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import RegulatoryDetailContentPart from './RegulatoryDetailContentPart.vue';
import RegulatoryDetailContentTree from './RegulatoryDetailContentTree.vue';

export default {
  data() {
    return {
      search: '',
    };
  },
  components: {
    RegulatoryDetailContentPart,
    RegulatoryDetailContentTree,
  },
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
.scroll {
  overflow: scroll;
}
</style>
