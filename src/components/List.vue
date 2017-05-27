<template id="list">
    <div class="list-group">
        <a v-for="(item, index) in listData" @click="clickOnItem($event,item,index)" @dblclick="dbclickOnItem($event,item,index)"
            @contextmenu="contextmenuOnItem($event,item)" class="list-group-item" :class="index == current?'active':''">
            <h4 class="list-group-item-heading">{{item.name}}</h4>
            <p v-if="item.desc" class="list-group-item-text"> - {{item.desc}}</p>
            <img v-if="item.img" :src="item.img" class="thumbnail">
        </a>
    </div>
</template>

<script>
    export default {
        name: 'list',
        props: ['listData', 'current'],
        methods: {
            contextmenuOnItem: function (e, item) {
                //  x: e.clientX y: e.clientY
            },
            dbclickOnItem: function (e, item, index) {
                this.$emit('dblclick', item, index)
            },
            clickOnItem: function (e, item, index) {
                this.$emit('click', item, index)
            }
        }
    }

</script>
