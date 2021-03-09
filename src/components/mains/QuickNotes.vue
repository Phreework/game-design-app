<template >
  <v-card class="d-flex flex-column pa-0" width="100%">
    <v-card-title class="py-1 titleyellow">
      <span class="font-weight-light">小想法</span>
    </v-card-title>
    <v-container>
      <v-row>
        <v-col cols="4" class="ma-0 pa-0">
          <v-card outlined tile>
            <v-simple-table width="200px" :height="$vuetify.breakpoint.xl ? 330 : 250" dense>
              <template v-slot:default>
                <tbody>
                  <tr v-for="n in 9" :key="n">
                    <td>
                      <span class="pa-0 ma-0" @click="1"> aaaaaasss </span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
        <v-col cols="8" class="ma-0 pa-0">
          <v-row class="ma-0 pa-0">
          <v-textarea
            :height="($vuetify.breakpoint.xl ? 280 : 200) +'px'" 
            :label="($vuetify.breakpoint.xs ?'请输入内容':'jj')"
            class="some-style ma-0 pa-0"
          ></v-textarea>
          </v-row>
          <v-row class="mt-1">
            <v-col cols="8" class="ma-0 pa-0"> </v-col>
            <v-col cols="4" class="ma-0 pa-0">
              <v-btn text dense>
                <span class="textgrey--text">添加</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: "QuickItems",
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

<style scoped>
.some-style /deep/ .v-input__control /deep/ .v-input__slot::before {
  border-style: none !important;
}
.some-style
  /deep/
  .v-input__control
  /deep/
  .v-input__slot
  /deep/
  .v-text-field__slot
  textarea {
  resize: none !important;
}
</style>