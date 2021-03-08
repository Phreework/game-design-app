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
/* <svg xmlns="http://www.w3.org/2000/svg" width="15.882" height="16.2" viewBox="0 0 15.882 16.2">
  <path id="路径_15" data-name="路径 15" d="M82.641,63.2a8.1,8.1,0,1,0,7.941,8.1A8.022,8.022,0,0,0,82.641,63.2Zm.918,12.731H81.484v-1.95h2.075Zm.848-4.619q-1.188.805-1.059,1.567v.34h-1.7v-.466a2.377,2.377,0,0,1,1.1-2.119q1.057-.846,1.018-1.526a.976.976,0,0,0-.974-.974q-1.188,0-1.482,1.567l-1.907-.423q.51-2.88,3.686-2.8,2.627.127,2.838,2.373A2.816,2.816,0,0,1,84.407,71.313Z" transform="translate(-74.7 -63.2)" fill="#9310b2"/>
</svg> */