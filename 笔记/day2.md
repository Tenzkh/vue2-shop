Home模块组件拆分
---先把静态页面完成
--拆分出静态组件



axios:二次封装
安装axios
API放axios请求
接口当中：路径都带有/api
baseURL:'/api'


接口统一管理

跨域问题
协议、域名、端口号不同请求，称之为跨域

http://gmall-h5-api.atguigu.cn --后台服务器



vuex状态管理器


完成TypeNav三级联动


三级联动用户可以点击的：一级分类，二级分类，三级分类，当你点击的时候
Home模块跳转到Search模块，一级会把用户选中的产品信息在路由跳转的时候进行参数传递

三级联动给如果使用声明式导航router-link会出现卡顿现象


开发Search模块中的typeNav


开发Search模块中的TypeNav商品分类菜单（过度动画效果）
过度动画：前提组件|元素务必要有v-if|v-show指令才可以进行过渡动画

在APP根组件当中发请求【根组件mounted只会执行一次】



合并参数（params和query参数）


开发home首页中的listContainer组件与Floor组件
对于ListContainer与floor数据服务器没有返回
mock数据(模拟):如果你想mock数据,需要用到一个插件mockjs

使用步骤：
1）在项目当中src文件夹中创建一个mock文件夹
2)准备JSON数据（mock文件夹中创建相应的json文件）----不能留空格
3）把mock数据需要用到的图片放置到public文件夹中【public文件夹在打包的时候，会把相应的资源原封不动的打包到dist文件夹中】
4)开始mock(虚拟数据)，通过mockjs模块实现,创建mockServe.js通过mockjs插件实现模拟数据
5）mockServe.js文件在入口文件中引入（至少需要执行一次）


5）listContainer组件开发重点
安装Swiper


watch:数据监听 监听已有数据的变化


$netTick：在下次DOM更新  循环结束之后执行延迟回调，    在修改数据之后立即使用这个方法，获取更新之后的DOM


v-for也可以在自定义标签中运用

组件通信的方式有哪些？面试频率极高
props:用于父子组件通信
自定义事件：@on @emit 可以实现子给父传递
全局事件总线：$bus 全能
插槽：
vuex

商品列表、平台售卖属性已经动态数据（来自于服务器的数据）



当面包屑中的关键字清楚以后,需要让兄弟组件中Header组件中的关键字清空
设计组件通讯

1：综合 2：价格 asc:升序 desc：降序

谁该有类名：通过order属性值当中包含1（综合）|2(价格)

谁应该有箭头：



很多电商平台需要用分页


pageNo字段代表当前页数
需要知道每一个需要展示多少条数据:page


pageNo:当前第几个
pageSize:代表每一页展示多少条数据
total:代表整个分页一共要展示多少条数据
continues:代表分页连续页码数个数

自定义分页器，在开发时传递假数据进行调试，直到调试成功再用服务器的数据

对于分页器而言，很重要的一个地方【算出连续页面起始数字和结束数字】

分页器动态展示数据
v-for:数组|数字|字符串|对象

静态组件（详情页的组件）


浏览器本地存储：HTML5新增的、


UUID游客身份



assest： 全部组件共用的静态资源



登录：
一般登录成功服务器会下发token,前台需要持久保存token，

(统一登录账号)
13700000000  111111