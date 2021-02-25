<template>
  <div class="home">
    <v-container id="goals" class="py-2" tag="section">
      <heading>工具列表</heading>
      <v-row>
        <v-col
          v-for="(item, i) in cards"
          :key="i"
          class="d-flex"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card width="280" height="178">
            <v-card-title class="py-2">
              <v-img
                width="53"
                height="53"
                max-width="53"
                :src="item.iconSrc"
              />
              <span class="title font-weight-light" v-text="item.name"></span>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-list height="68" class="py-1 pb-1">
              <v-card-text class="py-0" v-text="item.des" />
            </v-list>
            <v-card-actions class="py-0">
              <v-spacer></v-spacer>
              <v-btn text> 使用 </v-btn>
              <v-btn text> 帮助 </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({
    cards: [
      {
        cardId: 1,
        iconSrc: require("../assets/ins.png"),
        name: "Excel转Json工具",
        des: "聚合Excel导出JSON功能聚合Excel导出JSON功能",
        pageUrl: "",
        help: "工具信息：聚合Excel导出JSON功能",
      },
      {
        cardId: 2,
        iconSrc: require("../assets/ins.png"),
        name: "颜色参考工具",
        des:"获得好看的配色方案",
        pageUrl: "",
        help: "工具信息：获得好看的配色方案",
      },
      {
        cardId: 3,
        iconSrc: require("../assets/ins.png"),
        name: "字体推荐",
        des: "聚合Excel导出JSON功能",
        pageUrl: "",
        help: "工具信息：聚合Excel导出JSON功能",
      },
      {
        cardId: 4,
        iconSrc: require("../assets/ins.png"),
        name: "Json语法检查",
        des: "聚合Excel导出JSON功能",
        pageUrl: "",
        help: "工具信息：聚合Excel导出JSON功能",
      },
      {
        cardId: 5,
        iconSrc: require("../assets/ins.png"),
        name: "RGB与Hex颜色互转",
        des: "聚合Excel导出JSON功能",
        pageUrl: "",
        help: "工具信息：聚合Excel导出JSON功能",
      }
    ],
  }),
};
</script>
