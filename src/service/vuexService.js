/**
 * Created by zhoou on 2016/11/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

// import logger from './logger'  // 记录日志 ：logger 插件会生成状态快照，所以仅在开发环境使用。


import listModule from '../modules/listModule'
import projectModule from '../modules/projectModule'
import moduleModule from '../modules/moduleModule'
import componentModule from '../modules/componentModule'
import elementModule from '../modules/elementModule'
// import dataModule from '../modules/dataModule'
import viewportModule from '../modules/viewportModule'

import commonModuleModule from '../modules/commonModuleModule'
import commonComponentModule from '../modules/commonComponentModule'


Vue.use(Vuex)
Vue.use(VueResource)



const store = new Vuex.Store({
    // plugins: [logger],
    state: {
        title: "JSCODER",
        sideBarList: [{
            name: '页面组件',
            href: '/page/module',
            cls: ''
        }, {
            name: '项目页面',
            href: '/project',
            cls: ''
        }, {
            name: '通用库池',
            href: '/pool/module',
            cls: ''
        }, {
            name: '模板规范',
            href: '/template',
            cls: ''
        }, {
            name: '插件扩展',
            href: '/plugin',
            cls: ''
        }, {
            name: '<<',
            href: '',
            cls: 'disp'
        }],
        pageBarList: [{
            name: '页面',
            href: '/page/module',
        }, {
            name: '组件',
            href: '/page/component',
        }, {
            name: '元素',
            href: '/page/element',
        }, {
            name: '数据',
            href: '/page/data',
        }],
        poolBarList: [{
            name: '通用模块池',
            href: '/pool/module',
        }, {
            name: '通用组件池',
            href: '/pool/component',
        }]
    },
    modules: {
        list: listModule,
        project: projectModule,
        module: moduleModule,
        component: componentModule,
        element: elementModule,
        // data: dataModule
        viewport: viewportModule,
        commonModule: commonModuleModule,
        commonComponent: commonComponentModule
    }
})

export default store
