/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-20
 * Time: 下午2:50
 * To change this template use File | Settings | File Templates.
 */

function updatePrice(obj) {
	var o = obj.parent();
	var price = parseFloat($.trim(o.find('.price').html()));
	var number = parseInt($.trim(o.find('.number')));
	console.log(price + 'd ' + number);
	var count = o.find('.count');
	count.html(price * number);
}
