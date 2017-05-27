<style lang="less" rel="stylesheet/less">
    .context-menu {
        position: absolute;
    }

</style>
<template>
    <div class="mouse-action-section">
        <menu v-if="menu.data && menu.data.length" class="context-menu" :style="{
      top:menu.position.y+'px', left:menu.position.x+'px'}"></menu>
    </div>
</template>
<script>
    var menuData = require('data/menu');
    module.exports = {
        data: function () {
            return {
                menu: {
                    position: {},
                    file: null,
                    data: null
                }
            }
        },
        methods: {
            hide: function () {
                this.menu.data = null;
            }
        },
        components: {
            menu: require('../components/context-menu.vue')
        },
        ready: function () {
            var vm = this;
            $event.on('contextmenu:file', function (data) {
                //                console.log('file menu',data);
                vm.menu.data = menuData.file;
                vm.menu.file = data.file;
                vm.menu.position = {
                    x: data.x,
                    y: data.y
                };
            });
        }
    }

</script>
