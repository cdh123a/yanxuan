/*mock数据 的ajax请求 */
import ajax from './ajax'

//请求主页main的商品信息
export const reqDataMain = () => ajax('/main')

//请求识物界面的商品信息
export const reqDataSearch = () => ajax('/search')

//请求分类界面的商品信息
export const reqDataCategory = () => ajax('/category')
