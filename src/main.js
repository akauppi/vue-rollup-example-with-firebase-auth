/*
* src/main.js
*
* The entry point, pointed to by 'rollup.config.js'.
*
* Note: We provide access to Firebase authenticated user, but we *don't* deal with the Firebase-UI;
*     'src/pages/SignIn.vue' does.
*/
import { createApp } from 'vue';

/* was (Vue 2.x) #bygones
import { VueRouter } from 'vue-router';
Vue.use(VueRouter);       // needed before first 'new Vue(...)'
*/

import App from './App.vue';
import router from './router.js';

// this or that? tbd.
createApp(App)
    .use(router)
    .mount('#app');

/* was: (Vue 2.x) #bygones
new Vue({
  el: '#app',
  router,
  render: h => {
    return h(App)
  },

  renderError: (h, err) => {  // pour runtime problems on the screen, if we have them (may help in development);
                              // in production we may want to pour these to central monitoring
    return h('pre', { style: { color: 'red' }}, err.message)    // has 'err.stack'
  }
});
*/
