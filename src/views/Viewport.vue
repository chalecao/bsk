<template>
    <div class='viewport' :style='viewStyle'>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'viewport',
        computed: {
            ...mapState({
                scale: state => state.viewport.scale,
                width: state => state.viewport.width,
                height: state => state.viewport.height,
                background: state => state.viewport.background,
            }),
            viewStyle: function () {
                let val = this.scale
                return {
                    'width': this.width + "px",
                    'height': this.height + "px",
                    'background-color': this.background,
                    '-webkit-transform': 'scale(' + val + ',' + val + ')',
                    '-moz-transform': 'scale(' + val + ',' + val + ')',
                    '-o-transform': 'scale(' + val + ',' + val + ')',
                    'transform': 'scale(' + val + ',' + val + ')'
                }
            }
        }
    }

</script>
