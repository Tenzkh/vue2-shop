import {
    reqGetSearchInfo
} from "@/api";



const actions = {
    //获取search模块数据
    async getSearchList({
        commit
    }, params = {}) {
        //至少传递一个空对象
        //params形参，是当用户派发action的时候：第二个参数传过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    }


};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const state = {
    searchList: {}
};
//计算属性
//简化仓库中的数据
//可以把我们将来在组件当中的数据简化一下{将来组件在获取数据的时候就方便了}
const getters = {
    goodsList(state) {
        //当前形参state,是当前仓库的state,不是大仓库的state
        //加入网络不给力|没有网state.searchList.goodsList应该返回的是undefind
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    attrsList(state) {
        return state.searchList.attrsList;
    }
};
export default {
    actions,
    mutations,
    state,
    getters
}