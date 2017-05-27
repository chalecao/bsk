// import store from '../service/vuexService'
import Vue from 'vue'
const moduleModule = {
    state: {
        defaultPageUrl: "/.cmp/index/index.cmpp",
        current: 0
    },
    mutations: {
        ChangePageUrl(state, payload) {
            state.defaultPageUrl = payload;
        },
        SetPageCurrent(state, payload) {
            state.current = payload;
        }
    },
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions: {},
    // 可以认为是 store 的计算属性
    getters: {
        getPageUrl: state => {
            return state.defaultPageUrl
        }
    }
}

export default moduleModule
