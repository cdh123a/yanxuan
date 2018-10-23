import Mock from 'mockjs'

import dataMain from './data/datahome.json'
import dataSearch from './data/datashiwu.json'
import dataCategory from './data/datafenlei.json'


console.log('mock服务开始.....')
//模拟服务器 拦截ajax请求
Mock.mock('/main',{code:0,data : dataMain })
Mock.mock('/search',{code:0,data : dataSearch })
Mock.mock('/category',{code:0,data : dataCategory })

//不需要暴露  直接引入mainjs
