// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';

Vue.config.productionTip = false;

Vue.use(ElementUI);

axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios;
// Vue.prototype.$urlHead='http://127.0.0.1:4000';
Vue.prototype.$urlHead = 'http://bc.5niu.top:8081';

Vue.prototype.$idCard = function (str) {
    var pwdRge = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return pwdRge.test(str.trim())
};//密码：6-21位，不能是纯数字或纯字母

Vue.prototype.$telReg = function (str) {
    var telReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    return telReg.test(str.trim())
};


//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
/*axios.interceptors.request.use(function(config) { //配置发送请求的信息
    store.dispatch('showLoading');
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //配置请求回来的信息
    store.dispatch('hideLoading');
    return response;
}, function(error) {
    return Promise.reject(error);
});*/
// axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});












