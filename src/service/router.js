import Vue from 'vue'
import Router from 'vue-router'
import ErrorView from '@/views/ErrorView'
import PageView from '@/views/PageView'
import ModuleView from '@/views/ModuleView'
import ComponentView from '@/views/ComponentView'
import ElementView from '@/views/ElementView'
import DataView from '@/views/DataView'
import PoolView from '@/views/PoolView'
import ProjectView from '@/views/ProjectView'

import CommonModuleView from '@/views/CommonModuleView'
import CommonComponentView from '@/views/CommonComponentView'

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: 'project'
}, {
    path: '/page',
    name: 'PageView',
    component: PageView,
    children: [{
        path: 'module',
        name: 'ModuleView',
        component: ModuleView
    }, {
        path: 'component',
        name: 'ComponentView',
        component: ComponentView
    }, {
        path: 'element',
        name: 'ElementView',
        component: ElementView
    }, {
        path: 'data',
        name: 'DataView',
        component: DataView
    }]
}, {
    path: '/pool',
    name: 'PoolView',
    component: PoolView,
    children: [{
        path: 'module',
        name: 'CommonModuleView',
        component: CommonModuleView
    }, {
        path: 'component',
        name: 'CommonComponentView',
        component: CommonComponentView
    }]
}, {
    path: '/project',
    name: 'ProjectView',
    component: ProjectView
}, {
    path: '*',
    component: ErrorView
}]
const router = new Router({
    hashbang: true, // 将路径格式化为#!开头
    history: true, // use history=false when testing
    // mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes // （缩写）相当于 routes: routes
})
export default router
