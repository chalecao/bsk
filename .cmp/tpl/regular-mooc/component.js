/**
 * __desc__ 组件实现文件
 *
 * @module   __nameCamel__
 */
NEJ.define([
    'text!./component.html',
    'css!./component.css',
    'pool/component-base/src/base',
    'pool/component-base/src/util',
    'base/element',
    'base/event'
], function(
    html,
    css,
    Component,
    util,
    e,
    v
) {

    /**
     * __nameCamel__ 组件
     *
     * @class   module:__nameCamel__
     * @extends module:pool/component-base/src/base.Component
     *
     * @param {Object} options      - 组件构造参数
     * @param {Object} options.data - 与视图关联的数据模型
     */
    var __nameCamel__ = Component.$extends({
        name: '__name__',
        css: css,
        template: html,
        /**
         * 模板编译前用来初始化参数
         *
         * @protected
         * @method  module:__nameCamel__#config
         * @returns {void}
         */
        config: function() {
            // FIXME 设置组件配置信息的默认值
            util.extend(this, {

            });
            // FIXME 设置组件视图模型的默认值
            util.extend(this.data, {

            });

            this.supr();
            // TODO
        },

        /**
         * 模板编译之后(即活动dom已经产生)处理逻辑，可以在这里处理一些与dom相关的逻辑
         *
         * @protected
         * @method  module:__nameCamel__#init
         * @returns {void}
         */
        init: function() {
            // TODO
            this.supr();

        },

        /**
         * 组件销毁策略，如果有使用第三方组件务必在此先销毁第三方组件再销毁自己
         *
         * @protected
         * @method  module:__nameCamel__#destroy
         * @returns {void}
         */
        destroy: function() {
            // TODO
            this.supr();
        }
    });

    return __nameCamel__;
});
