<template>
  <div class="home">
    <v-container id="goals" class="py-2" tag="section">
       <h2>工具列表</h2>
      <v-row>
        <v-col
          v-for="(item, i) in cards"
          :key="i"
          class="d-flex"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card width="280" height="178" @click="onClickCard(item.pageUrl)">
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
              <v-btn text @click.stop="onClickCardUseBtn(item.pageUrl)">
                使用
              </v-btn>
              <v-btn text @click.stop="onClickCardHelpBtn(item.help)"> 帮助 </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="isTipOpen">
        {{ tipStr }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="isTipOpen = false">
            关闭
          </v-btn>
        </template>
      </v-snackbar>
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
    isTipOpen: false,
    tipStr: "",
    cards: [
      {
        cardId: 1,
        iconSrc: require("../assets/ins.png"),
        name: "任务清单",
        des: "简洁好用的任务清单",
        pageUrl: "todo",
        help: "工具信息：帮助整理当日工作，聚焦最重要的工作",
      },
      {
        cardId: 2,
        iconSrc: require("../assets/ins.png"),
        name: "Excel转Json工具",
        des: "聚合Excel导出JSON功能聚合Excel导出JSON功能",
        pageUrl: "",
        help: "工具信息：聚合Excel导出JSON功能",
      },
      {
        cardId: 3,
        iconSrc: require("../assets/ins.png"),
        name: "颜色参考工具",
        des: "获得好看的配色方案",
        pageUrl: "",
        help: "工具信息：获得好看的配色方案",
      },
      {
        cardId: 4,
        iconSrc: require("../assets/ins.png"),
        name: "字体推荐",
        des: "聚合Excel导出JSON功能",
        pageUrl: "",
        help: "工具信息：聚合Excel导出JSON功能",
      },
      {
        cardId: 5,
        iconSrc: require("../assets/ins.png"),
        name: "Json语法检查",
        des: "聚合Excel导出JSON功能",
        pageUrl: "",
        help: "工具信息：聚合Excel导出JSON功能",
      },
      {
        cardId: 6,
        iconSrc: require("../assets/ins.png"),
        name: "颜色格式转换",
        des: "RGB，Hex，HSL颜色互转",
        pageUrl: "colorExchange",
        help: "工具信息：RGB与Hex颜色互转",
      },
    ],
  }),
  methods: {
    onClickCard(url) {
      if(url=="")return;
      this.$router.push({ path: "/" + url });
    },
    onClickCardUseBtn(url) {
      if(url=="")return;
      this.$router.push({ path: "/" + url });
    },
    onClickCardHelpBtn(helpstr) {
      this.tipStr = helpstr;
      this.isTipOpen = true;
    },
  },
};
</script>
