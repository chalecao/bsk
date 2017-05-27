// import store from '../service/vuexService'
import Vue from 'vue'
const viewportModule = {
    state: {
        scale: 1,
        width: 1260,
        height: 900,
        background: "#fff"
    },
    mutations: {
        SetViewport(state, payload) {
            state.width = payload.width;
            state.height = payload.height;
        },
        SetScale(state, payload) {
            state.scale = payload
        },
        SetBackground(state, payload) {
            state.background = payload
        }
    },
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions: {},
    // 可以认为是 store 的计算属性
    getters: {}
}

export default viewportModule
