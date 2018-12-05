import Vue from 'vue'

//全局通用样式
import '../stylesheets/main.scss'

//全局配置axios
import axios from 'axios'
Vue.prototype.$http = axios

//全局配置cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// 建立一个可以一次删除所有cookies的方法
// console.log(Vue.prototype.$cookies.keys())  //获取所有保存在cookies里的cookies name，返回一个数组
Vue.prototype.$cookies.clear = function(){
    let keys = Vue.prototype.$cookies.keys()
    keys.forEach(key => {
        this.remove(key)
    })
}

//全局组件
import './commons'



Vue.config.productionTip = false