<template >
  <v-card class="d-flex flex-column" width="100%">
    <v-card-title class="py-1 titleyellow">
      <span class="font-weight-light">小想法</span>
    </v-card-title>
    <!-- <v-divider class="mx-4"></v-divider> -->
    <v-card height="200px">
      <v-container>
        <v-row>
          <v-col cols="4" class="ma-0 pa-0">
            <v-card outlined tile>
              <v-simple-table
                width="200px"
                height="198px"
                dense
              >
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
            <v-textarea
              height="160px"
              clearable
              clear-icon="mdi-close-circle"
              label="请输入内容"
              class="some-style ma-0 pa-0"
            ></v-textarea>
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
 .some-style  /deep/ .v-input__control /deep/ .v-input__slot::before {
  border-style: none !important;
}
.some-style /deep/ .v-input__control /deep/ .v-input__slot /deep/ .v-text-field__slot textarea{
  resize: none  !important;
}
</style>