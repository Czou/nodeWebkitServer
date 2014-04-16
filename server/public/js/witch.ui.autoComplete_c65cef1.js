/**
 * autoComplete UI的实现，使用方法参考demo
 * @Version 0.2
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-2 下午6:05
 */
;(function($) {

    $.fn.witchAuto = function(options) {

        var defaults = {
            class: "f-autocmp",//默认标题选中样式
            cp: 5,//默认正文区样式
            ajaxUrl: undefined//通过ajax加载内容，此为ajax获取数据的地址，暂不支持JSONP，提交方法为POST//默认为不通过ajax
        }

        var options = $.extend(defaults, options);

			var o = this;
			var op = this.parent();
			var ul = $('<ul class="' + options.class + '" style="width:' + o.width() + 'px;display:none;left:'+(o.offset().left - op.offset().left)+'px;"></ul>');
			alert((o.offset().left - op.offset().left));
			op.append(ul);
			function keyDownUp() {
				$.ajax({
					type: "post",
					url: options.ajaxUrl,
					success: function(msg) {
						if(msg != '') {
							msg = '张三,李四,王武,';
							var array = msg.split(',');
							array.pop();
							var li='';
							for(var i = 0,il = array.length; i<il; i++) {
								li+= '<li>' + array[i] + '</li>';
							}
							ul.children().remove();
						  ul.append(li);
							ul.css("display","block");
							ul.children().bind('click', function() {
								o.val($(this).text());
								ul.css("display", "none");
							});
						}
					}
				});
			}

			o.bind('keyup',function() {keyDownUp();});

    };

})(jQuery);