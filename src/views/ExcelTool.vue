<template>
  <div class="home">
    <heading>Excel工具</heading>
    <section class="white">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="2">
            <span class="">选择文件</span>
          </v-col>
          <v-col cols="12" md="4">
            <v-file-input
              id="file"
              @change="tirggerFile($event)"
            ></v-file-input>
          </v-col>
          <v-col cols="12" md="2">
            <span class="caption text-lowercase" md="2">{{ fileTip }}</span>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import { testWeb } from "./../../scripts/Main.ts";
export default {
  name: "Home",
  data: () => ({
    fileTip: "未选择文件",
  }),
  components: {
    HelloWorld,
  },
  methods: {
    async tirggerFile(event) {
      let file = event; // (利用console.log输出看file文件对象)
      console.log(file);
      // let url = window.webkitURL.createObjectURL(file);
      // console.log(url);
      //// await testWeb(file);
      this.fileTip = "加载成功";
      // do something...
    },
  },
};
</script>
