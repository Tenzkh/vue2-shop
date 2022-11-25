import {
    reqCategoryList,
    reqGetFloorList,

    reqGetBannerList
} from '@/api'


const actions = {

    //通过API里面的接口函数调用，向服务器发请求
    async categoryList({
        commit
    }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    //获取首页轮播图的数据

    async getBannerList({
        commit
    }) {

        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },

    //获取floor数据
    async getFloorList({
        commit
    }) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data);
        }
    }


};
const mutations = {
    //三级联动
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    //banner
    GETBANNERLIST(state, bannerlist) {

        state.bannerList = bannerlist;
    },
    //floor
    GETFLOORLIST(state, floorlist) {
        state.floorList = floorlist;

    }
};
const state = {
    //state默认初始值不能乱写
    categoryList: [],
    bannerList: [],
    floorList: [],

};
//计算属性
const getters = {};
export default {
    actions,
    mutations,
    state,
    getters
}