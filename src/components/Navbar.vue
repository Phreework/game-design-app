<template>
  <nav>
    <v-app-bar
      elevate-on-scroll
      app
      color="bgwhite"
      height="50"
      style="-webkit-app-region: drag"
    >
      <v-toolbar-title
        class="textblack--text pa-1"
        v-for="(item, index) in preRouters"
        :key="item.id"
      >
        <v-btn text @click="clickLevelNav(item)" class="pa-0">
          <span
            :class="
              (index != preRouters.length - 1 ? 'textblack' : 'mypink') +
              '--text'
            "
            >{{ item.text }}</span
          >
        </v-btn>
        <span v-show="index != preRouters.length - 1" class="linegrey--text"
          >|</span
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="textgrey--text" style="font-size: 20px">12:00am &nbsp;</span>
      <v-icon color="textgrey">mdi-cog</v-icon>
      <v-icon class="ml-4" color="textgrey " @click="close()"
        >mdi-close-box</v-icon
      >
    </v-app-bar>
    <v-navigation-drawer
      app
      permanent
      v-model="drawer"
      color="bgwhite"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      dark
    >
      <v-list class="mx-0 my-0" color="bgwhite">
        <v-container class="ma-1 pa-1">
          <v-row>
            <v-col cols="3">
              <v-row class="pl-3">
                <v-avatar>
                  <img src="../assets/PhreeSodaLogo.png" />
                </v-avatar>
              </v-row>
            </v-col>
            <v-col cols="9">
              <v-row>
                <span class="textblack--text text-h6"> 策划工具箱</span>
              </v-row>
              <v-row>
                <span class="textgrey--text text-caption">
                  Dev - Preesoda&nbsp;Ver - 0.1.100
                </span>
              </v-row>
              <v-row>
                <span class="textgrey--text text-caption">
                  每一段付出，都值得收获回报
                </span>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-list>
      <v-divider class="linegrey"></v-divider>
      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          @click="changeSelect(link)"
          color="alphapink"
          class="pa-0"
        >
          <v-sheet
            class="mr-4"
            :color="link.isSelect ? 'mypink' : 'white'"
            width="5"
            height="50"
          ></v-sheet>
          <v-list-item-action class="mx-0 my-0">
            <v-icon
              :class="(link.isSelect ? 'mypink' : 'textgrey') + '--text'"
              >{{ link.icon }}</v-icon
            >
          </v-list-item-action>
          <v-list-item-content class="mx-4 px-0">
            <v-list-item-title
              :class="(link.isSelect ? 'mypink' : 'textgrey') + '--text'"
              >{{ link.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-3">
          <v-btn text class="textgrey--text text-caption" x-small>
            <span>捐赠</span>
          </v-btn>
          <span class="linegrey--text">|</span>
          <v-btn
            text
            class="textgrey--text text-caption"
            slot="activator"
            @click="popContactCard"
            x-small
          >
            <span>联系我</span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- <contact-card /> -->
    <hover-button />
  </nav>
</template>
<script>
import hoverBtn from "../components/hoverBtn";
import { preRouters, routeMap } from "../router/index";
export default {
  components: {
    hoverButton: hoverBtn,
  },
  name: "navBar",
  data() {
    return {
      drawer: false,
      preRouters,
      links: [
        {
          icon: routeMap.get("Home").icon,
          text: routeMap.get("Home").text,
          route: routeMap.get("Home").route,
          parent: routeMap.get("Home").parent,
          isSelect: true,
        },
        {
          icon: routeMap.get("Tools").icon,
          text: routeMap.get("Tools").text,
          route: routeMap.get("Tools").route,
          parent: routeMap.get("Tools").parent,
          isSelect: false,
        },
        {
          icon: routeMap.get("Todo").icon,
          text: routeMap.get("Todo").text,
          route: routeMap.get("Todo").route,
          parent: routeMap.get("Todo").parent,
          isSelect: false,
        },
        {
          icon: routeMap.get("Notes").icon,
          text: routeMap.get("Notes").text,
          route: routeMap.get("Notes").route,
          parent: routeMap.get("Notes").parent,
          isSelect: false,
        },
        {
          icon: routeMap.get("Books").icon,
          text: routeMap.get("Books").text,
          route: routeMap.get("Books").route,
          parent: routeMap.get("Books").parent,
          isSelect: false,
        },
        {
          icon: routeMap.get("About").icon,
          text: routeMap.get("About").text,
          route: routeMap.get("About").route,
          parent: routeMap.get("About").parent,
          isSelect: false,
        },
      ],
      myMedias: [
        {
          src: require("../assets/bilibili.png"),
          url:
            "https://space.bilibili.com/15047813?from=search&amp%3Bseid=11193698444244187734",
        },
        { src: require("../assets/email.png"), url: "http://www.baidu.com" },
        {
          src: require("../assets/twitter.png"),
          url: "https://twitter.com/Phree6",
        },
        {
          src: require("../assets/ins.png"),
          url: "https://www.instagram.com/phreework/",
        },
      ],
      right: false,
      miniVariant: false,
      expandOnHover: false,
      background: false,
    };
  },
  methods: {
    toDeail(data) {
      window.open(data.url);
    },
    popContactCard() {
      this.bus.$emit("isContactCardView", true);
    },
    changeSelect(link) {
      this.links.forEach((item) => {
        item.isSelect = link == item ? true : false;
      });
      this.refreshPreRouters();
      return link.route;
    },
    refreshPreRouters() {
      this.preRouters = preRouters;
    },
    clickLevelNav(item) {
      this.$router.push(item.route);
      this.refreshPreRouters();
      console.log("点击", this.links);
    },
    close() {
      //先使用下面跳转对应页面
      let routeData = this.$router.resolve({
        path: `/`,
      });
      window.open(routeData.href, "_blank");

      //新页面中,才能使用如下关闭
      window.close();

      //可以使用判断显示隐藏关闭按钮
      this.isActive = Boolean(window.opener);
    },
  },
};
</script>