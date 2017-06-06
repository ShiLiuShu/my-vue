import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);


const state={
    footGuideIndex:0
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});

//导出的store必须在main.js中导入引用才可使vuex生效