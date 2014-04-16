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
            ajaxUrl: undefined,//通过ajax加载内容，此为ajax获取数据的地址，暂不支持JSONP，提交方法为POST//默认为不通过ajax,
					 cfun: undefined
        }

        var options = $.extend(defaults, options);

			var o = this;
			var op = this.parent();
			var oOffset = o.offset();
			var opOffset = op.offset();
			var left ='left:' + (oOffset.left - opOffset.left) + 'px;';
			var top = 'top:' + (oOffset.top - opOffset.top + o.height() + 5) + 'px;';
			if(op.is('td')) {
				left = '';
				top = '';
			}
			var ul = $('<ul class="' + options.class + '" style="width:' + o.width() + 'px;display:none;'+ left + top +'z-index:1000;" tabindex="1"></ul>');
			op.append(ul);
			o.bind('blur',function() {setTimeout(function(){ul.css('display','none');},150)});
			function keyDownUp(obj) {
				$.ajax({
					type: "post",
					url: options.ajaxUrl,
					data: 'val='+ $.trim(o.val()),
					dataType:'json',
					success: function(msg) {
						if(msg != '') {
							//msg = '张1,张2,张3,';
							var li='';
							//for(var i = 0,il = msg.length; i<il; i++) {
								//li+= '<li>' + msg[i] + '</li>';
							//}
							for(var dk in msg) {
								li += '<li id="'+msg[dk].id+'">'+msg[dk].name+'</li>'
							}
							ul.children().remove();
						  ul.append(li);
							ul.css("display","block");
							ul.children().bind('click', function() {
								o.val($(this).text());
								if(options.cfun != undefined) {
									options.cfun($.trim($(this).text()),obj);
								}
								ul.css("display", "none");
							});
						}
					}
				});
			}

			o.bind('keyup',function() {keyDownUp(op);});

    };

})(jQuery);