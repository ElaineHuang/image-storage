import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';
import PATH from './constants/path';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: PATH.BASIC_URL,
      component: ImageList,
    },
    {
      path: PATH.UPLOAD,
      component: UploadForm,
    },
    {
      path: PATH.OAUTH2,
      component: AuthHandler,
    },
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
