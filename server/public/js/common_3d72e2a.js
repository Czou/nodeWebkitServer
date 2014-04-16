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
	var jine = 0, countItem;
	$("#user").find('.count').each(function() {
		countItem = $.trim($(this).html());
		if(countItem == '') {
			jine += 0;
		}
		else {
			jine += parseFloat(countItem);
		}
	});
	$("#jine").html(jine);
}

/* 保存订单 */
function saveOrder() {
	var data = {
		user: $.trim($('#shouhuoren').val()),
		express: $.trim($('#express').val()),
		phone: $.trim($('#phone').val()),
		time: $.trim($('#time').val()),
		des: $.trim($('#des').val()),
		orderid: $.trim($('#orderid').html()),
		jine: $.trim($('#jine').html())
	};
	var goods = {};
	var i=0;
	$('#user > tbody').find('tr').each(function() {
		var tds = $(this).find('td');
		if($(tds[1]).html() == '') {
			return;
		}
		else {
			goods[i].name = $.trim($(tds[1]).html());
			goods[i].norms = $.trim($(tds[1]).html());
			goods[i].name = $.trim($(tds[1]).html());
			goods[i].name = $.trim($(tds[1]).html());

		}
	});
}