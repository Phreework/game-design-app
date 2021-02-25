<template>
  <nav>
    <v-app-bar elevate-on-scroll app color="#D7D7D7" height="80">
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-uppercase grey--text mx-2">
        <v-img src="../assets/PhreeSodaLogo.png" width="70"></v-img>
      </v-toolbar-title>
      <v-toolbar-title class="text-uppercase deepblue--text mx-4 mt-2">
        <h2>游戏策划工具箱</h2>
      </v-toolbar-title>
      <v-toolbar-title class="text-uppercase deepblue--text mt-4">
        <h4>版本：V0.10</h4>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      app
      permanent
      v-model="drawer"
      :color="color"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      dark
    >
      <v-list class="mx-0 my-0" color="#616161">
        <v-layout column align-center>
          <v-flex class="text-center my-0">
            <v-avatar size="80" >
              <img src="../assets/PhreeSodaLogo.png" />
            </v-avatar>
            <p class="white--text subheading my-1 text-center">
              游戏策划工具箱
            </p>
          </v-flex>
          <v-flex class="mb-1">
            <v-btn slot="activator" @click="popContactCard">
              <v-icon small class="mr-2">mdi-email</v-icon>
              <span>获取联系方式</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          @click="changeSelect(link)"
        >
          <v-list-item-action>
            <v-icon :class="(link.isSelect?'myblue':'deepblue')+'--text'">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title :class="(link.isSelect?'myblue':'deepblue')+'--text'">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <contact-card />
    <hover-button />
  </nav>
</template>
<script>
import hoverBtn from "../components/hoverBtn";
export default {
  components: {
    hoverButton: hoverBtn,
  },
  name: "navBar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "主页", route: "/home" ,isSelect:true},
        { icon: "mdi-home", text: "设置", route: "/exceltool" ,isSelect:false},
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
      color: "#FAFAFA",
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
    changeSelect(link){
      this.links.forEach((item)=>{
          console.log("aa",(link==item)?true:false)
          item.isSelect = (link==item)?true:false;
      })
      return link.route;
    }
  },
};
</script>