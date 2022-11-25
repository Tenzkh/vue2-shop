import Vue from 'vue';
import Vuex from 'vuex';

//使用插件
Vue.use(Vuex);

//引入小vuex
import home from './home'
import search from './search'
import Detail from './Detail'
import ShopCart from './ShopCart'
import User from './User'
import Trade from './Trade'


//对外暴漏store类的一个实例

export default new Vuex.Store({
    //实现vuex仓库模块式开发
    modules: {
        home,
        search,
        Detail,
        ShopCart,
        User,
        Trade
    }
})