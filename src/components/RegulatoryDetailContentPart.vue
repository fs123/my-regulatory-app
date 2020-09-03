<template>
  <div>
    <div v-for="element in contentElements" :key="element.text">
      <v-row>
        <v-col v-if="element.type === 'HEADING'" cols="8" md="12">
          <v-card>
            <h1>{{element.text}}</h1>
          </v-card>
        </v-col>
        <v-col v-if="element.type === 'TEXT'" cols="8" md="8">
          <v-card>
            <span class="nodeClass">{{element.text}}</span>
          </v-card>
        </v-col>
        <v-col v-if="element.type === 'TEXT'" cols="4" md="4">
          <v-card>
            <span class="nodeClass">SECOND {{element.text.substring(0, 150)}}</span>
          </v-card>
        </v-col>
      </v-row>
      <RegulatoryDetailContentPart
        v-if="element.type === 'HEADING'"
        :contentElements="element.content"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "RegulatoryDetailContentPart",
  props: ["contentElements"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.nodeClass {
  white-space: pre-line;
}

li {
  text-align: left;
}
a {
  color: #42b983;
}
</style>
