<template id="list">
    <img v-if="type=='IMAGE'">
    <span v-if="type=='TEXT'">
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
