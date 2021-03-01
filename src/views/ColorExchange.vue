<template>
  <div class="home">
    <v-container id="goals" class="py-2" tag="section">
      <h2>颜色转换工具</h2>
      <v-row>
        <v-toolbar color="grey lighten-4" class="mt-4" flat>
          <v-col cols="1" class="px-0">
            <v-text-field
              flat
              hide-details
              label="Color"
              value="颜色值"
              disabled
            ></v-text-field
          ></v-col>
          <v-col cols="9" class="px-0">
            <v-text-field
              append-icon="mdi-microphone"
              flat
              hide-details
              label="输入要转换的颜色"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-col cols="1" class="px-2 py-0">
            <v-btn color="primary" @click="exchange"> 转换 </v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
      <v-row align="center">
        <v-col cols="2">
          <h6>示例(不区分大小写):</h6>
        </v-col>
        <v-col cols="9">
          <v-tooltip bottom v-for="(exp, i) in examples" :key="i">
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                class="ma-2"
                :color="exp.textColor"
                label
                text-color="white"
                v-bind="attrs"
                v-on="on"
              >
                {{ exp.str }}</v-chip
              >
            </template>
            <span>{{ exp.type }}</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="11">
          <v-card outlined >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" bgcolor="#f5f5f5">颜色预览</th>
                  <th class="text-left" bgcolor="#f5f5f5">颜色格式</th>
                  <th class="text-left" bgcolor="#f5f5f5">转换结果</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tableItems" :key="item.name">
                  <td :bgcolor="item.hex"></td>
                  <td bgcolor="#f5f5f5">{{ item.type }}</td>
                  <td bgcolor="#f5f5f5">{{ item.result }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ColorExchange",
  components: {},
  data: () => ({
    tableItems: [
      {
        hex: "#707B7C",
        type: "HEX",
        result: "#707B7C",
      },
      {
        hex: "#707B7C",
        type: "RGB",
        result: "rgb(112,123,124)",
      },
      {
        hex: "#707B7C",
        type: "HSL",
        result: "hsl(185,5%,46%)",
      },
    ],
    examples: [
      {
        str: "#707B7C",
        textColor: "#707B7C",
        type: "Hex颜色格式",
      },
      {
        str: "rgb(72,201,176)",
        textColor: "#48c9b0",
        type: "RGB颜色格式",
      },
      {
        str: "hsl(204,70%,63%)",
        textColor: "#5faee3",
        type: "HSL颜色格式",
      },
    ],
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
        des: "获得好看的配色方案",
        pageUrl: "",
        help: "工具信息：获得好看的配色方案",
      },
    ],
  }),
  methods: {
    exchange() {
      console.log("exchange");
    },
  },
};
</script>
