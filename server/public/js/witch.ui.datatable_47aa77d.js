/**
 * datatable的实现，使用方法参考demo
 * @Version 0.2
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-2 下午6:05
 */
;(function($) {
    $.fn.witchDataTable = function(options) {

        var defaults = {
            thead: {},//默认表头
            data: {},
            search: {
                'id':'#search',
                'input':'#input',
                'url':''
            }
        }

        var options = $.extend(defaults, options);

        var _dom=this;
        _dom.data('line',1);
        function init() {
            var thead='<thead><tr>';
            var theadOp=options.thead;
            for(var key in theadOp) {
                thead+='<th style="width:'+theadOp[key]+'">'+key+'</th>';
            }
            thead+='</tr></thead>';

            var data=options.data, line=_dom.data('line');
            thead+='<tbody>';
            for(var dk in data) {
                thead+='<tr><td>'+line+'</td><td class="uname">'+dk+'</td><td>'+data[dk]+'</td></tr>';
                _dom.data('line',++line);

            }
            thead+='</tbody>';
            _dom.append(thead);
        }
        init();//运行初始化

        /**以下为search函数**/
        if(options.search) {//绑定search函数
            $(options.search.input).bind({
                keydown: function(){ search();},
                keyup:function(){search()}
             });
        }
        function search() {
            var val=$.trim($(options.search.input).val());
            $('.uname').each(function() {
                var o=$(this);
               if(o.text().indexOf(val) == -1) {
                   o.parent().css('display', 'none');
               }
            });
        }

    };
})(jQuery);