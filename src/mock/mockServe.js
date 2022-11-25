//引入mockjs模块
import Mock from 'mockjs';
//把JSON数据格式引进来[JSON数据格式没有对外暴露，但是可以引用]
import banner from './banner.json'
import floor from './floor.json'

//mock数据:1参：请求地址 2参：请求数据
Mock.mock('/mock/banner', {
    code: 200,
    data: banner
}); //模拟首页大轮播图的数据
Mock.mock("/mock/floor", {
    code: 200,
    data: floor
})