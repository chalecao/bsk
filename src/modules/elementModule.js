// import store from '../service/vuexService'
import Vue from 'vue'
const elementModule = {
    state: {
        elementList: [],
        mainElement: "",
        current: 0
    },
    mutations: {
        SetElementList(state, payload) {
            state.elementList = payload.elementList;
            state.mainElement = payload.mainElement;
        },
        SetElementCurrent(state, payload) {
            state.current = payload;
        }
    },
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions: {},
    // 可以认为是 store 的计算属性
    getters: {}
}

export default elementModule
