<template >
  <v-container>
    <v-row>
      <v-col>
        <v-card class="d-flex flex-column" width="100%">
          <v-card-title class="py-1 titlered">
            <span class="font-weight-light">进行中</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PopItems",
  components: {},
  data: () => ({
    tasks: [],
  }),
  methods: {
    onClickCard(url) {
      if (url == "") return;
      this.$router.push({ path: "/" + url });
    },
  },
};
</script>

<style >
</style>