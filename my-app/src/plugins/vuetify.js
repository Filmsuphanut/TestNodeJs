import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
console.log(Vue.version);
console.log("hello world");

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#00ff', // #E53935
          secondary: '#00ff', // #FFCDD2
          accent: '#00ff', // #3F51B5
        },
      },
    },
  })


