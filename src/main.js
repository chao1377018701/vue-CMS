// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'

//导入vue-resource
import VueResource from 'vue-resource'
// 注册vue-resource
Vue.use(VueResource)

//配置vue-resource的请求根域名
Vue.http.options.root='http://www.lovegf.cn:8899/'

//按需导入mint-ui的组件
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
// 注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 导入自己的全局样式
import './css/common.less'

//定义全局的过滤器,实现时间的格式化
Vue.filter('dateFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dateStr).format(pattern)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)

})
