<template >
  <v-card class="d-flex flex-column" width="100%">
    <v-card-title class="py-1 titlered">
      <span class="font-weight-light">进行中</span>
    </v-card-title>
    <!-- <v-divider class="mx-4"></v-divider> -->
    <v-virtual-scroll
      class="ma-0 pa-0"
      :bench="0"
      :items="tasks"
      height="120"
      item-height="20"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-checkbox
            v-model="item.isFinish"
            :label="item.content"
            class="pa-0 ma-0"
          />
        </v-list-item>
      </template>
    </v-virtual-scroll>
    <v-card-actions class="pa-0 ma-0">
      <v-text-field label="添加待办" class="ma-0 pa-0" flat solo>
      </v-text-field>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TodayTask",
  components: {},
  data: () => ({
    tasks: [
      {
        id: 1,
        content: "完成游戏英文化方案",
        isFinish: false,
        level: 1,
      },
      {
        id: 2,
        content: "完成游戏英文化方案",
        isFinish: false,
        level: 1,
      },
      {
        id: 3,
        content: "完成游戏英文化方案",
        isFinish: false,
        level: 1,
      },
      {
        id: 4,
        content: "完成游戏英文化方案",
        isFinish: false,
        level: 1,
      },
      {
        id: 5,
        content: "完成游戏英文化方案",
        isFinish: false,
        level: 1,
      },
      {
        id: 6,
        content: "完成游戏英文化方案",
        isFinish: false,
        level: 1,
      },
      {
        id: 7,
        content: "完成游戏英文化方案",
        isFinish: false,
        level: 1,
      },
      {
        id: 8,
        content: "完成游戏英文化方案",
        isFinish: false,
        level: 1,
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
.v-messages {
  min-height: 0px !important;
  height: 0px !important;
}
.v-text-field__details {
  margin-bottom: 0px !important;
  min-height: 0px !important;
}
.v-input__slot {
  margin-bottom: 0px !important;
}
/* .v-input /deep/ .v-input__control /deep/ .v-input__slot::before {
  border-style: none !important;
} */
</style>