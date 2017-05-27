<template>
    <div id="pageList">
        <list :listData="pageList" :current="current" @click="handleClick" @dblclick="handleDblclick"></list>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {
        mapState,
        mapGetters,
        mapActions,
        mapMutations
    } from 'vuex'
    import List from '@/components/List'
    export default {
        name: 'tab-view',
        computed: {
            ...mapGetters({
                pageList: 'getListData',
                commonModuleUrl: 'getCommonModuleUrl'
            }),
            ...mapState({
                current: state => state.commonModule.current,
            })
        },
        components: {
            List
        },
        mounted() {
            this.$nextTick(function () { // 保证 this.$el 已经插入文档
                this.initPageData()
            })
        },
        methods: {
            initPageData() {
                this.commonModuleUrl && this.InitDataList(this.commonModuleUrl);
            },
            ...mapActions(['InitDataList']),

            handleDblclick(item, index) {
                this.SetCommonModuleCurrent(index)
            },
            handleClick(item, index) {
                this.SetCommonModuleCurrent(index)
            },
            ...mapMutations(['SetCommonModuleCurrent']),
        }
    }

</script>
