/**
 * autoComplete UI的实现，使用方法参考demo
 * @Version 0.2
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-2 下午6:05
 */
;(function($) {

    $.fn.witchAuto = function(options) {

        var defaults = {
            class: "f-tab-active",//默认标题选中样式
            cp: 5,//默认正文区样式
            ajaxUrl: undefined//通过ajax加载内容，此为ajax获取数据的地址，暂不支持JSONP，提交方法为POST//默认为不通过ajax
        }

        var options = $.extend(defaults, options);

			var o = this;
			var op = this.parent();
			var ul = '<ul class="' + options.class + '" style="width:' + o.width() + '"></ul>';






    };

})(jQuery);