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
	//var loadi = layer.load('加载中…'); //需关闭加载层时，执行layer.close(loadi)即可
	var uid = $.trim($('#shouhuoren').data('uid'));
	var express = $.trim($('#express').val());
	var phone = $.trim($('#phone').val());
	if(!uid || express =='' && phone =='') {
		
	}
	var data = {
		uid: uid,
		express: express ,
		phone: phone,
		des: $.trim($('#des').val()),
		orderid: $.trim($('#orderid').html()),
		jine: $.trim($('#jine').html())
	};
	var goods = [];
	var i=0;
	$('#user > tbody').find('tr').each(function() {
		var tds = $(this).find('td');
		if($(tds[1]).html() == '') {
			return;
		}
		else {
			goods.push({'name': $.trim($(tds[1]).html())})
			//goods[i].name = $.trim($(tds[1]).html());
			goods[i].norms = $.trim($(tds[2]).html());
			goods[i].unit = $.trim($(tds[3]).html());
			goods[i].number = $.trim($(tds[4]).html());
			goods[i].sale = $.trim($(tds[5]).html());
			goods[i].count = $.trim($(tds[6]).html());
			goods[i].state = $.trim($(tds[7]).html());
			i++;
		}
	});
	data.goods = goods;
	$.ajax({
		type:'post',
		url: '/order/addorder/addorder',
		data: 'order=' + JSON.stringify(data),
		datatype:'json',
		success: function(msg) {

		}
	})
}