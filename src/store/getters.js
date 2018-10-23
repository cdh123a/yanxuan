export default {
  //轮播图的对象
  banner (state) {
    return state.dataMain.focusList
  },

  //导航区文字 和 下面cateList[x].itemList
  cateList(state){

     return state.dataMain.cateList
  },

  //品牌制造商直供
  tagList (state) {
    if(!state.dataMain.tagList)  return ;
    return state.dataMain.tagList.splice(0,4)
  },

  //新品首发
  newItemNewUserList(state){
    return state.dataMain.newItemNewUserList
  },

  //人气推荐
  popularItemList(state){
    return state.dataMain.popularItemList
  },

  //专题精选
  topicList (state){
    return state.dataMain.topicList
  }
}
