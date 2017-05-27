<template>
    <div>
        <div class="elementList">
            <list :listData="elementList" :current="current" @click="handleClick" @dblclick="handleDblclick"></list>
        </div>
        <div class="baseElements"></div>
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
            ...mapState({
                current: state => state.element.current,
                mainElement: state => state.element.mainElement,
                dataList: state => state.element.elementList,
            }),
            elementList: function () {
                let listData = [];
                if (this.mainElement) {
                    let root = this.dataList.find(a => {
                        return a.properties && a.properties.id == this.mainElement + "-container";
                    })
                    root && listData.push({
                        name: root.properties.id
                    });
                    this.dataList.forEach(a => {
                        if (a.properties && a.properties.id != this.mainElement + "-container") {
                            listData.push({
                                name: "- " + a.properties.id
                            });
                        }
                    })
                } else {
                    this.dataList.forEach(a => {
                        listData.push({
                            name: a.properties.id
                        });
                    })
                }
                return listData
            }
        },
        components: {
            List
        },
        mounted() {},
        methods: {
            handleClick(item, index) {
                this.SetElementCurrent(index)
            },
            handleDblclick(item, index) {},
            ...mapMutations(['SetElementCurrent']),
        }
    }

</script>
