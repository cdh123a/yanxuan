import {
  DATA_MAIN ,
  DATA_CATEGORY ,
  DATA_SEARCH
}from './mutation-type'

import  {
  reqDataMain ,
  reqDataSearch ,
  reqDataCategory
} from '../api'



export default {
  async getMain ({commit}) {
    const result = await reqDataMain();
    if(result.code === 0){
      //成功
      const dataMain = result.data
      commit(DATA_MAIN,{dataMain})
    }
  },

  async getCategory ({commit}) {
    const result = await reqDataCategory();
    if(result.code === 0){
      //成功
      const dataCategory = result.data
      commit(DATA_CATEGORY,{dataCategory})
    }
  },

  async getSearch ({commit},callback) {
    const result = await reqDataSearch();
    if(result.code === 0){
      //成功
      const dataSearch = result.data
      commit(DATA_SEARCH,{dataSearch})

      callback && typeof callback === 'function' ?  callback() : null;
    }
  },
}
