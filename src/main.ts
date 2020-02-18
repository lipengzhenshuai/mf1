import Vue from 'vue'

import App from './App.vue' // 入口页面

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
