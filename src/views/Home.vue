<template>
  <div class="home">
    <v-container id="goals" class="py-0" tag="section">
      <v-row >
        <v-col cols="7">
          <h2>重要事项</h2>
        </v-col>
        <v-col cols="5">
          <h2>今日事项</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="7" class="d-flex pt-0">
          <important-task />
        </v-col>
        <v-col cols="5" class="d-flex pt-0">
          <today-task />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="7" class="pt-1">
          <h2>常用功能</h2>
        </v-col>
        <v-col cols="5" class="pt-1">
          <h2>神奇便签</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="7" class="d-flex pt-0">
          <pop-items />
        </v-col>
        <v-col cols="5" class="d-flex pt-0"> 
          <quick-notes />
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
import ImportantTask from "@/components/mains/ImportantTask.vue";
import TodayTask from "../components/mains/TodayTask.vue";
import PopItems from "../components/mains/PopItems.vue";
import QuickNotes from "../components/mains/QuickNotes.vue";
export default {
  name: "Home",
  components: {
    ImportantTask,
    TodayTask,
    PopItems,
    QuickNotes,
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
      if (url == "") return;
      this.$router.push({ path: "/" + url });
    },
    onClickCardUseBtn(url) {
      if (url == "") return;
      this.$router.push({ path: "/" + url });
    },
    onClickCardHelpBtn(helpstr) {
      this.tipStr = helpstr;
      this.isTipOpen = true;
    },
  },
};
</script>
