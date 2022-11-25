import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入路由文件
import router from './router'

//三级联动全局组件
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from "@/components/Pagination"
import {
  Button,
  MessageBox
} from "element-ui";

//引入Vuex 
import store from './store'

//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)

//element-ui组件注册的时候，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert

//引入MockServe.js---mock数据
import '@/mock/mockServe';



//引入swiper样式
import "swiper/css/swiper.css"


//统一接口api文件夹里面全部请求函数
import * as API from '@/api'

/*********************************************************************/
//图片懒加载
import VueLazyload from 'vue-lazyload'
//使用图片懒加载插件：自定义插件【Vue.use】
//Vue.use,回调用插件对象install方法，install方法会注入Vue构造函数
//插件里面：Vue.component、Vue.directive、Vue.prototype.$bus、Vue.filter等等
//在使用图片懒加载插件的时候，第二个参数：配置对象
//引入图片模块：JSON、图片默认对外暴露
import erha from '@/assets/images/1.gif';
//Vue.use的时候，这个插件给咱们提供一个全局指令v-lay
Vue.use(VueLazyload, {
  //设置图片懒加载默认图片
  loading: erha,
});

//引入自定义插件
import myPlugins from './plugins/myPlugins'
Vue.use(myPlugins)


//引入校验插件
import "./plugins/validate"


new Vue({
  render: h => h(App),
  //注册路由
  router: router,
  //注册vuex
  store: store,
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;

  }
}).$mount('#app')