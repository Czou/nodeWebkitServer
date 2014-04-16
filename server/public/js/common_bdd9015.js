/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-20
 * Time: 下午2:50
 * To change this template use File | Settings | File Templates.
 */
function dataGrad(obj, thead,) {
	var thead = '<thead><tr>';
	var theadOp = options.thead;
	for (var i = 0, _l = theadOp.length; i < _l; i++) {
		thead += '<th style="width:' + theadOp[i].width + '">' + theadOp[i].name + '</th>';
	}
	thead += '<th>&nbsp;</th></tr></thead>';
}