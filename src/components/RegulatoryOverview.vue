<template>
  <div id = "regulatoryOverview" class="hello" style="min-width: 98%">
    <v-card>
      <v-card-title>
        Regulation Overview
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="regulatories"
        :search="search"
        @click:row="onRowClick"
        hide-default-footer>
        <template v-slot:item.status="{ item }">
          <v-chip v-if="item.status === 'APPROVED'" class="ma-2" color="green" >
            {{ item.status.toUpperCase() }}
          </v-chip>
          <v-chip v-else class="ma-2" color="blue" >
            {{ item.status.toUpperCase() }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
// <v-chip class="ma-2" color="secondary" >
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'Number', value: 'number', width: '10%' },
        { text: 'Title', value: 'title', width: '25%' },
        { text: 'Description', value: 'description', width: '45%' },
        { text: 'Status', value: 'status', width: '10%' },
        // { text: 'publicationDate', value: 'publicationDate' },
        // { text: 'applicationDate', value: 'applicationDate' },
      ],
    };
  },
  computed: {
    ...mapState({
      regulatories: (state) => state.regulatory.regulatories,
    }),
  },
  methods: {
    onRowClick(item) {
      console.log(item.id);
      this.$router.push({ name: 'Regulatory', params: { id: item.id } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
li {
  text-align: center;
}
a {
  color: #42b983;
}
</style>
