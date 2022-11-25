//引入路由组件
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySucess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'


//路由懒加载，需要的时候路由才会调用
const foo = () => {
    return import('@/pages/Home')
}


export default [

    {
        path: '/home',
        //路由懒加载
        component: () => import("@/pages/Home"),
        meta: {
            show: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: {
            show: true
        },
        // props: ($route) => {
        //     return {
        //         keyword: $route.params.keyword,
        //         k: $route.query.k
        //     };
        // }
    }, {
        path: "/login",
        component: Login,
        meta: {
            show: false
        }
    }, {
        path: "/register",
        component: Register,
        meta: {
            show: false
        }
    },
    {
        //带上产品id给详情页面
        path: '/detail/:skuid',
        name: "detail",
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        path: "/addcarsuccess",
        name: "addcarsuccess",
        component: AddCartSuccess,
        meta: {
            show: true
        }

    },
    {
        path: "/shopcart",
        name: "shopcart",
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        path: "/trade",
        name: "trade",
        component: Trade,
        meta: {
            show: true
        },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            //去交易页面，必须是从购物车而来
            if (from.path == '/shopcart') {
                next()
            } else {
                //其他的路由组件而来，停在当前
                next(false)
            }
        }
    },
    {
        path: "/pay",
        name: "pay",
        component: Pay,
        meta: {
            show: true
        },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next();
            } else {
                next(false)
            }
        }
    },

    {
        path: "/paysucess",
        name: "paysucess",
        component: PaySucess,
        meta: {
            show: true
        }

    },
    {
        path: "/center",
        name: "center",
        component: Center,
        meta: {
            show: true
        },
        //二级路由
        children: [{
            path: "myorder",
            component: MyOrder
        }, {
            path: "grouporder",
            component: GroupOrder
        }, {
            path: "/center",
            redirect: "/center/myorder"
        }]
    },

    //重定向
    {
        path: "*",
        redirect: '/home'
    }


]