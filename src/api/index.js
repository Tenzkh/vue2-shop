//API进行统一管理
import instance from "./request";
import mockRequests from './mockAjax'
//三级联动
//  /api/product/getBaseCategoryList  get 无参数


export const reqCategoryList = () => {
    //发请求
    return instance({
        url: "/product/getBaseCategoryList",
        method: 'get'
    });
}


//获取banner(home首页轮播图)
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')

//获取搜索模块数据， 请求方式post
//需要带参数
/**
 *{
     "category3Id": "61",
     "categoryName": "手机",
     "keyword": "小米",
     "order": "1:desc",
     "pageNo": 1,
     "pageSize": 10,
     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
     "trademark": "4:小米"
 }

 */
//当前这个接口给服务器传递的参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => instance({
    url: "/list",
    method: "post",
    data: params
})


//获取产品详情信息的接口
export const reqGetDetail = (skuId) => instance({
    url: `/item/${ skuId }`,
    method: "get",

})


//将产品添加到购物车中或者更新某一个产品的个数
//  /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => instance({
    url: `/cart/addToCart/${ skuId }/${ skuNum }`,
    method: "post"

})

//获取购物车的数据
export const reqCartList = () => instance({
    url: "/cart/cartList",
    method: "get"
})


//删除购物车产品的接口
///cart/deleteCart/{skuId}
export const reqDeletCartById = (skuId) => instance({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})

//切换栏状态
export const reqUpdateCheckedById = (skuId, isChecked) => instance({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get"
})

//获取验证码 /api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) => instance({
    url: `/user/passport/sendCode/${phone}`,
    method: "get"
})

//注册 /api/user/passport/register
export const reqUserRegister = (data) => instance({
    url: "/user/passport/register",
    data,
    method: 'post'
})



//登录
export const reqUserLogin = (data) => instance({
    url: "/user/passport/login",
    data,
    method: 'post'
})


//获取用户信息【带着用户token向服务器要信息】 /user/passport/auth/getUserInfo

export const reqUserInfo = () => instance({
    url: "/user/passport/auth/getUserInfo",
    method: "get"
})

//退出登陆
export const reqLogout = () => instance({
    url: "/user/passport/logout",
    method: "get"
})


//获取用户地址信息
export const reqAddressInfo = () => instance({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get"
})

//获取商品清单
// /api/order / auth / trade

export const reqOrderInfo = () => instance({
    url: "/order/auth/trade",
    method: "get"
})

//提交订单
export const reqSubmitOrder = (tradeNo, data) => instance({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post"

})

//获取支付信息
//url:"/payment/weixin/createNative/{orderId}"
export const reqPayInfo = (orderId) => instance({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get"
})

//获取支付订单状态
export const reqPayStatus = (orderId) => instance({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: "get"
})

//获取个人中心的数据
export const reqMyOrderList = (page, limit) => instance({
    url: `/order/auth/${page}/${limit}`,
    method: "get"
})