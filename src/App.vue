<template>
    <div class="body">
        <!-- Fixed navbar -->
        <nav class="navbar navbar-default navbar-fixed-top">
            <div id="navbar" class="navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="../navbar/">Default</a></li>
                    <li><a href="../navbar-static-top/">Static top</a></li>
                    <li class="active"><a href="./">Fixed top <span class="sr-only">(current)</span></a></li>
                </ul>
            </div>
        </nav>
        <div class="main">
            <div class="sidebar f-cb">
                <ul class="nav nav-sidebar">
                    <li v-for='item in sideBarList' :class="item.cls" v-on:click="select(item)">
                        <router-link v-if="item.href" :to="item.href">{{ item.name }}</router-link>
                        <a v-if="!item.href">{{ item.name }}</a>
                    </li>
                </ul>
                <transition name="fade">
                    <div class="no-padding oper-container" v-if="operCls==='show'">
                        <transition name="fade">
                            <router-view keep-alive></router-view>
                        </transition>
                    </div>
                </transition>
            </div>
            <div class="viewportContainer" >
                <div class="no-padding" id="viewportContainer"></div>
            </div>
            <div class="no-padding"></div>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                operCls: 'show'
            }
        },
        computed: {
            ...mapState(['title', 'sideBarList'])
        },
        methods: {
            select: function (item) {
                if (item.cls === 'disp') {
                    item.name = item.name === '>>' ? '<<' : '>>'
                    this.operCls = this.operCls === 'hide' ? 'show' : 'hide'
                }
            }
        }
    }

</script>
