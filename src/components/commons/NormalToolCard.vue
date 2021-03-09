<template >
    <v-card
      class="pa-1 d-flex flex-column"
      width="100%"
      height="100%"
      :to="info.route"
    >
      <v-icon large>{{ info.icon }}</v-icon>
      <span class="textblack--text text-center">{{ info.title }}</span>
      <span class="font-weight-light text-center">{{ info.des }}</span>
    </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: "NormalToolCard",
  components: {},
  props: {
    info: {
      icon: String,
      title: String,
      des: String,
      route: String,
    },
  },
  data: () => ({
    tools1: [
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
    tools2: [
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