//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';

//引入进度条的样式
import 'nprogress/nprogress.css'

//start:进度条开始  done：进度条结束


//利用axios对象方法creat,去创建一个axios实例
const instance = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    baseURL: '/mock',
    //请求时间,代表超时的时间5s
    timeout: 5000,
});


//请求拦截器:在发请求之前可以检测到，可以干一些事情
instance.interceptors.request.use((config) => {
    //进度条开始
    nprogress.start();
    return config;
});

//响应拦截器：服务器的数据已经返回了，可以干一些事情
instance.interceptors.response.use((res) => {
    //进度条结束
    nprogress.done();
    return res.data;
}, (error) => {
    //终止promise链
    return Promise.reject(error);
});
//暴露
export default instance;