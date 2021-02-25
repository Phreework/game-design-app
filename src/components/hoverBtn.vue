<template>
  <v-speed-dial
    style="position: fixed; bottom: 3rem; right: 2.5rem; z-index: 9999"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
  >
    <template v-slot:activator>
      <v-fab-transition>
        <v-btn
          v-show="scrolled"
          color="blue darken-2"
          dark
          fab
          @click="scrollToTop"
        >
          <!-- <v-icon v-if="fab">mdi-close</v-icon> -->
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </v-fab-transition>
    </template>
    <!-- <v-btn fab dark small color="green">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn fab dark small color="indigo">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn fab dark small color="red">
      <v-icon>mdi-delete</v-icon>
    </v-btn>-->
  </v-speed-dial>
</template>
<script>
export default {
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
    scrolled: false,
  }),
  methods: {
    scrollToTop() {
      document.documentElement.scrollTop = 0;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 500;
    },
  },
  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    },
  },
  created: function () {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    },
  },
};
</script>
<style scoped>
</style>>