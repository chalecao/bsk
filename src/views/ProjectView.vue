<template>
    <div class="panel">
        <list :listData="poolList" :current="current" @click="handleClick" @dblclick="handleDblclick"></list>
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
        name: 'project-view',
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                poolList: 'getListData',
                projectUrl: 'getProjectUrl'
            }),
            ...mapState({
                current: state => state.project.current,
            })
        },
        components: {
            List
        },
        mounted() {
            this.$nextTick(function () { // 保证 this.$el 已经插入文档
                this.initProjectData()
            })
        },
        methods: {
            initProjectData() {
                this.InitDataList(this.projectUrl);
            },
            ...mapActions(['InitDataList']),
            handleDblclick(item, index) {
                this.SetProjectCurrent(index)
                this.ChangePageUrl(item.url)
                location.hash = "#/page/module";
            },
            handleClick(item, index) {
                this.SetProjectCurrent(index)
            },
            ...mapMutations(['SetProjectCurrent']),
            ...mapMutations(['ChangePageUrl'])
        }
    }

</script>
