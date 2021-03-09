<template >
  <v-container class="ma-0 pa-0 full-height" fluid>
      <v-row class="fill-height">
        <v-col class="pb-0">
          <normal-tool-card :info="tools[0]" class=" mb-5" />
        </v-col>
        <v-col class="pb-0 ">
          <normal-tool-card :info="tools[1]" class=" mb-5"/>
        </v-col>
        <v-responsive width="100%"></v-responsive>
        <v-col class="pb-0 ">
          <normal-tool-card :info="tools[2]" class="mt-2 mb-5"/>
        </v-col>
        <v-col class="pb-0 ">
          <normal-tool-card :info="tools[3]" class="mt-2 mb-5"/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import NormalToolCard from "../commons/NormalToolCard.vue";
export default {
  name: "PopItems",
  components: {
    NormalToolCard,
  },
  data: () => ({
    tools: [
      {
        icon: "mdi-code-json",
        title: "JSON格式化工具",
        des: "打开工具箱，发现大世界",
        route: "/tools",
      },
      {
        icon: "mdi-code-json",
        title: "JSON格式化工具",
        des: "打开工具箱，发现大世界",
        route: "/tools",
      },
      {
        icon: "mdi-code-json",
        title: "JSON格式化工具",
        des: "打开工具箱，发现大世界",
        route: "/tools",
      },
      {
        icon: "mdi-code-json",
        title: "JSON格式化工具",
        des: "打开工具箱，发现大世界",
        route: "/tools",
      },
    ],
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