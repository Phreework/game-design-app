<template>
  <v-app>
    <Navbar />
    <v-content class="contentwhite">
      <router-view class="pa-4"></router-view>
    </v-content>
        <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

// import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    // Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.subtitle-1{
  margin-left: 16px;
  margin-right: 16px;
}
::-webkit-scrollbar {
  width: 0px;
}
html {
  overflow-y: hidden;
}
/* .light::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.light::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.light::-webkit-scrollbar-thumb:hover {
  background: black;
}

.dark::-webkit-scrollbar {
  width: 15px;
}

.dark::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.dark::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.dark::-webkit-scrollbar-thumb:hover {
  background: white;
} */
</style>