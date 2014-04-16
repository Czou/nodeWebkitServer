/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-20
 * Time: 下午2:50
 * To change this template use File | Settings | File Templates.
 */
function dataGrad(obj, options) {
	var _self = this;
	var defaults = {
		thead: {},//默认表头
		data: {},
		search: {
			'id': '#search',
			'input': '#input',
			'url': ''
		}
	}

	var options = $.extend(defaults, options);

	var thead = '<thead><tr>',tbody = '';
	for (var i = 0, _l = theadOp.length; i < _l; i++) {
		thead += '<th style="width:' + theadOp[i].width + '">' + theadOp[i].name + '</th>';
		tbody += '<td></td>';
	}
	thead += '<th>&nbsp;</th></tr></thead>';

	thead += '<tbody><tr>'+tbody+'</tr></tbody>';
	$(obj).append(thead);
}