//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

import routers from './routers'
//使用插件
Vue.use(VueRouter)

//引入store
import store from '@/store'



//先把VueRouter 原型对象的push,先保存一份
let originPush = VueRouter.prototype.push;


//call||apply区别
//都可以调用函数一次，都可以篡改上下文一次
//call和apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组

//重写push|replace
//第一个参数：告诉原来push方法，你往哪跳
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}


let router = new VueRouter({
    //配置路由
    routes: routers,
    scrollBehavior(to, from, savedPosition) {
        //返回的y等于0，代表滚动条在最上方
        return {

            y: 0
        }
    }

})


//全局守卫：前置守卫
router.beforeEach(async (to, from, next) => {
    //to:可以获取到你要跳转的那个路由信息
    //from：可以获取到你从哪个路由来的信息
    //next：放行函数  ，next()放行
    //next('/login')，放行到指定路由
    // next();
    //用户登录了才有token
    let token = store.state.User.token;
    //用户信息
    let name = store.state.User.userInfo.name
    if (token) {
        //用户已经登陆了还想去login,拒绝此请求
        if (to.path == '/login') {
            next('/home')
        } else {
            //登陆了，但是去的不是login[home,search,detail,shopcart]
            //如果用户名已有
            if (name) {
                next();

            } else {
                //没有用户信息
                try {
                    //获取用户信息在首页展示，派发action让仓库存储用户信息
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    //token失效了,获取不到用户信息
                    //清除token
                    await store.dispatch('userLogout')
                    next('/login')

                }
            }
        }
    } else {
        //未登录：不能去交易相关，不能去支付相关【play|paysucess】、不能去个人中心
        //未登录去上面的这些了路由---登录
        let toPath = to.path;
        console.log(toPath);
        console.log(123);
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            //把未登录的时候向去而没有去成的信息，存储于地址中
            next('/login?redirect=' + toPath);
        } else {
            next()
        }
    }
});




export default router;