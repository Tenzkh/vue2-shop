import {
    reqGetCode,
    reqUserRegister,
    reqUserLogin,
    reqUserInfo,
    reqLogout
} from "@/api";

import {
    removeToken,
    setToken
} from "@/utils/token";


const actions = {
    //获取验证码的接口：把验证码返回，但是正常情况
    async getCode({
        commit
    }, phone) {

        let result = await reqGetCode(phone);
        if (result.code == 200) {

            commit("GETCODE", result.data);
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //用户注册
    async userRegister({
        commit
    }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {

            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }

    },


    //登录业务【token】
    async userLogin({
        commit
    }, data) {
        let result = await reqUserLogin(data);
        //服务器下发的token是某一个用户的标识符
        //将来经常通过token带的信息来要token
        if (result.code == 200) {

            commit("USERLOGIN", result.data.token);
            setToken(result.data.token);

            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },

    //获取用户信息
    async getUserInfo({
        commit
    }) {

        let result = await reqUserInfo()
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },

    //退出登录
    async userLogout({
        commit
    }) {
        //只是向服务器发起一次请求，清除服务器的数据
        let result = await reqLogout()
        if (result.code == 200) {
            //action里不能操作state,提交mutations
            commit("CLEAR");
            return 'ok';
        } else {
            return Promise.reject(new Error("faile"));
        }
    }


};
const mutations = {
    GETCODE(state, code) {

        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    //清除数据
    CLEAR(state) {
        //把仓库中相关用户数据清空
        state.token = "";
        state.userInfo = {},
            removeToken()
    }


};
const state = {
    code: "",
    token: localStorage.getItem("TOKEN"),
    userInfo: {}
};
//计算属性
//简化仓库中的数据
//可以把我们将来在组件当中的数据简化一下{将来组件在获取数据的时候就方便了}
const getters = {


};
export default {
    actions,
    mutations,
    state,
    getters
}