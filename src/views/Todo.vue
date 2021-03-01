<template>
  <div class="home">
    <v-container id="goals" class="py-2" tag="section">
      <h2>任务清单</h2>
      <v-row>
        <v-col>
          <v-card>
            <v-list flat subheader three-line>
              <v-subheader>任务列表</v-subheader>
              <v-list-item-group multiple active-class="">
                <v-list-item v-for="(task, i) in tasks" :key="i">
                  <v-list-item-action>
                    <input
                      type="checkbox"
                      v-model="task.isFinish"
                      style="zoom: 200%"
                    />
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>{{ task.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ task.des }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Todo",
  components: {},
  data: () => ({
    enabled: true,
    tasks: [
      {
        title: "任务1",
        des: "任务1描述",
        isFinish: true,
      },
      {
        title: "任务2",
        des: "任务2描述",
        isFinish: false,
      },
      {
        title: "任务3",
        des: "任务3描述",
        isFinish: false,
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
