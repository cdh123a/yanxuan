import {
  DATA_MAIN ,
  DATA_SEARCH ,
  DATA_CATEGORY
} from './mutation-type'

export default {
  [DATA_MAIN] (state,{dataMain}) {
    state.dataMain = dataMain
  },

  [ DATA_CATEGORY] (state,{dataCategory}) {
    state.dataCategory = dataCategory
  },

  [ DATA_SEARCH] (state,{dataSearch}) {
    state.dataSearch = dataSearch
  },
}
