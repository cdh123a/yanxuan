import {
  DATA_MAIN
} from './mutation-type'

export default {
  [DATA_MAIN] (state,{dataMain}) {
    state.dataMain = dataMain
  }
}
