import {
    reqGetDetail,
    reqAddOrUpdateShopCart
} from "@/api";
//封装游客身份的模块uuid--->生成一个随机的字符串（不能变化）

import {
    getUUID
} from '@/utils/uuid_token'

const actions = {
    async getGoodsList({
        commit
    }, skuId) {
        let result = await reqGetDetail(skuId);
        if (result.code == 200) {
            commit('GETGOODSLIST', result.data)
        }
    },

    //将产品添加到购物车中
    async addOrUpdateShopCart({
        commit
    }, {
        skuId,
        skuNum
    }) {
        //加入购物车返回的结构
        //发请求后，前台将参数带给服务器
        //服务器写入数据成功，并没有返回其他数据，只是返回code==200,代表操作成功
        //因为服务器没有返回其余数据，因此不需要存储
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);

        //判断加入购物车是成功了还是失败了
        if (result.code == 200) {
            return "ok"
        } else {
            //代表加入购物车失败
            return Promise.reject(new Error('faile'))
        }

    }


};
const mutations = {
    GETGOODSLIST(state, goodList) {
        state.goodList = goodList
    }

};
const state = {
    goodList: {},
    //游客临时身份
    uuid_token: getUUID()
};
//计算属性
//简化仓库中的数据
//可以把我们将来在组件当中的数据简化一下{将来组件在获取数据的时候就方便了}
const getters = {
    categoryView(state) {
        //当计算出来的 categoryView属性值至少是一个空对象
        return state.goodList.categoryView || {}
    },

    //简化产品信息的数据
    skuInfo(state) {
        return state.goodList.skuInfo || {}
    },
    //产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodList.spuSaleAttrList || [];
    }

};
export default {
    actions,
    mutations,
    state,
    getters
}