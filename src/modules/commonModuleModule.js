// import store from '../service/vuexService'
import Vue from 'vue'
const commonModuleModule = {
    state: {
        defaultCommonModuleUrl: "/.cmp/index/index.cmpp",
        current: 0
    },
    mutations: {
        ChangeCommonModuleUrl(state, payload) {
            state.defaultCommonModuleUrl = payload;
        },
        SetCommonModuleCurrent(state, payload) {
            state.current = payload;
        }
    },
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions: {},
    // 可以认为是 store 的计算属性
    getters: {
        getCommonModuleUrl: state => {
            return state.defaultCommonModuleUrl
        }
    }
}

export default commonModuleModule
