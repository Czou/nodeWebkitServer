/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-20
 * Time: 下午2:50
 * To change this template use File | Settings | File Templates.
 */

/* 更新过单价 或 数量 后，自动更新金额*/
function updatePrice(obj) {
	var o = obj.parent();
	var price = parseFloat($.trim(o.find('.price').html()));
	var number = parseInt($.trim(o.find('.number').html()));
	var count = o.find('.count');
	var countNumber = price * number;
	count.html(countNumber);
	var jine = 0;
	$("#user").find('.count').each(function() {
		if($.trim($(this).html()) == '') {
			jine += 0;
		}
	});
	var oo = $("#jine");
	oo.html()
}
