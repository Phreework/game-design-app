<template>
  <v-app>
    <Navbar />
    <v-content class="grey lighten-4 mb-4">
      <router-view></router-view>
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
</style>
