import {
  DATA_MAIN
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
  }
}
