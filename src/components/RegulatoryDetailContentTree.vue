<template>
  <div>
    <v-text-field
            v-model="search"
            label="Search Regulatory"
            clearable
            clear-icon="mdi-close-circle-outline"
          ></v-text-field>

    <v-treeview
      dense
      :rounded="true"
      :hoverable="true"
      :items="items"
      :search="search"
    >
      <template slot="label" slot-scope="{ item }">
        <a @click="test(item.id)">{{ item.name }}</a>
      </template>
    </v-treeview>
  </div>

</template>

<script lang="ts">

function convert(contentEntries) {
  if (!contentEntries) {
    return [];
  }
  return contentEntries
    .filter((e) => e.type === 'HEADING')
    .map((e) => ({
      id: e.text + 42,
      name: e.text,
      children: convert(e.content),
    }));
}

export default {
  name: 'RegulatoryDetailContentTree',
  props: ['regulatory'],
  data() {
    return {
      search: null,
      items: convert(this.regulatory.content),
    };
  },
  methods: {
    test(dd) {
      console.log(dd);
    },
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
