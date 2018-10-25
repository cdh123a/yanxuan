# yanxuan-shopping

## 严选项目总结：

#数据拿取
1.数据mock回来之后，数据是一个整个页面的数据集合，因此我在getters内定义一个页面会使用的各个数据，在组件映射拿取时 会存在 of ‘undefined’的情况,此时使用v-if判断还是会出现， 最后在getters内进行判断，if（!xxx） return  

2.更新数据的时机  
   一般数据拿回来之后，创建swiper和better-scroll容器  会在watch内的回调 使用$nextTick方法 或者 dispatch内第二个参数传入一个方法 ，在这个函数内使用$nextTick方法
