<template>
  <!-- <div> -->
    <v-card width="100%">
      <v-card-title class="py-1 titlepink">
        <span class="font-weight-light" v-text="'早上好，PhreeSoda'"></span>
      </v-card-title>
      <!-- <v-divider class="mx-4"></v-divider> -->
      <v-list>
        <v-container class="pa-0 ma-0">
          <v-row>
            <v-col>
              <v-card-text
                class="pa-0 pt-2 text-h5"
                style="text-align: center"
                dense
                >当下最重要的事项是？</v-card-text
              >
            </v-col>
          </v-row>
          <v-row class="ma-0 pa-0">
            <v-col cols="1" />
            <v-col class="pa-0 ma-0">
              <v-text-field
                class="centered-input pa-0 ma-0 text-input-textgrey"
              >
              </v-text-field>
            </v-col>
            <v-col cols="1" />
          </v-row> 
        </v-container>
      </v-list>
      <v-card-actions class="pa-0 ma-0">
        <v-spacer class="pa-0 ma-0"></v-spacer>
        <v-checkbox
          v-model="isFinish"
          :label="isFinish ? '完成' : '未完成'"
          class="pa-0 ma-0"
        >
        </v-checkbox>
        <v-spacer class="pa-0 ma-0"></v-spacer>
      </v-card-actions>
    </v-card>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "ImportantTask",
  components: {},
  data: () => ({
    isFinish: false,
    tipStr: "",
  }),
  methods: {
    onClickCard(url) {
      if (url == "") return;
      this.$router.push({ path: "/" + url });
    },
  },
};
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
  color: #91969f;
}
</style>