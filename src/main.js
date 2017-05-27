// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//vue组件用大写字母开头表示，便于区分
import App from './App'
import Viewport from './views/Viewport'
//js组件用小写字母开头
import store from './service/vuexService'
import router from './service/router'


import './assets/css/bootstrap.css'
import './assets/css/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: page => page(App)
})
new Vue({
    el: '#viewportContainer',
    store,
    render: page => page(Viewport)
})
