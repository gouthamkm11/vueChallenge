import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Message from './Message.vue';

//This is available as a global component
// Vue.component('app-message', Message);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
