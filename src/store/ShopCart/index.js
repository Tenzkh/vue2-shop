import {
    reqCartList,
    reqDeletCartById,
    reqUpdateCheckedById
} from "@/api";



const actions = {
    //获取购物车
    async getCartList({
        commit
    }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    //删除购物车
    async deletCartListBySkuId({
            commit
        }, skuId) {
            let result = await reqDeletCartById(skuId)
            if (result.code == 200) {
                return "ok"
            } else {
                //代表删除购物车失败
                return Promise.reject(new Error('faile'))
            }
        }

        ,

    //修改购物车产品选中状态的数据

    async updateCheckedById({
        commit
    }, {
        skuId,
        isChecked
    }) {
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return "ok"

        } else {
            Promise.reject(new Error('faile'))
        }

    },
    //删除全部勾选的产品
    deleteAllCheckedCart({
        dispatch,
        getters
    }) {
        let PromiseAll = [];
        //context:小仓库，commit[提交mutation修改state]
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deletCartListBySkuId', item.skuId) : ""
            PromiseAll.push(promise)
        });
        //只要p1，p2都成功，返回结果即为成功，如果有一个失败，返回即失败
        return Promise.all(PromiseAll)
    },


    //修改全部产品的状态
    updateAllCartIsChecked({
        dispatch,
        state
    }, isChecked) {
        let promiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById', {
                skuId: item.skuId,
                isChecked
            })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll);

    }

};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }


};
const state = {
    cartList: []
};
//计算属性
//简化仓库中的数据
//可以把我们将来在组件当中的数据简化一下{将来组件在获取数据的时候就方便了}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },

};
export default {
    actions,
    mutations,
    state,
    getters
}