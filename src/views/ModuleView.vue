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
                pageUrl: 'getPageUrl'
            }),
            ...mapState({
                current: state => state.module.current,
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
                this.pageUrl && this.InitDataList(this.pageUrl);
            },
            ...mapActions(['InitDataList']),

            handleDblclick(item, index) {
                this.SetPageCurrent(index)
                this.ChangeComponentUrl({
                    url: item.url,
                    mainComponent: item.name
                })
                location.hash = "#/page/component";
            },
            handleClick(item, index) {
                this.SetPageCurrent(index)
            },
            ...mapMutations(['ChangeComponentUrl']),
            ...mapMutations(['SetPageCurrent']),
        }
    }

</script>
