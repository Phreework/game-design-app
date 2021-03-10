// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        myblue: '#4285F4',
        deepblue: '#2C3E50',
        //new version
        bgwhite: "#FFFFFF",
        contentwhite: "#F9F9F9",
        mypink: "#9310B2",
        alphapink: "#EBD2F1",
        linegrey: "#F1F2F5",
        textgrey: "#91969F",
        titlegrey: "#A19797",
        textblack: "#292D34",
        titleblack: "#504949",
        titleyellow: "#F9F6C9",
        titlered: "#F1DAD2",
        titlepink: "#EBD2F1",
      },
    },
  }, 
  // breakpoint: {
    // thresholds: {
    //   xs: 340,
    //   sm: 540,
    //   md: 800,
    //   lg: 1280,
    // },
    // scrollBarWidth: 1,
  // },
});

