/**
 * --------------------------------------------------------
 * 商品设定
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-4-11 下午3:46
 * --------------------------------------------------------
 */

var home = {},
	tools=require('../../lib/tools.js'),
	goodsApi=require('../../models/goodsApi.js'),
	config=require('../../config/config.js'),
	async=require('async');

home.index = function(req, res){
	//res.render('settingnav');
}

home.page = function(req, res) {
	goodsApi.page('', 1, function(err, rows) {
		if(err) {
			res.send(err);
			return;
		}
		res.render('ajax/goodspage',{rows: rows});
	});
}

home.addgoods = function(req, res) {
	res.render('form/addgoods.html');
}

home.add = function(req, res) {
	var goodsInfo = {
		name:tools.xssFilter(req.body.name),
		norms:tools.xssFilter( req.body.norms),
		unit: tools.xssFilter(req.body.unit),
		assist: tools.xssFilter(req.body.assist),
		price: tools.xssFilter(req.body.price),
		sale: tools.xssFilter(req.body.sale),
		number: tools.xssFilter(req.body.number),
		assistNumber: tools.xssFilter(req.body.assistNumber)
	};
	goodsApi.insert(goodsInfo, function(err,doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
}

home.update = function(req, res) {
	goodsApi.update(tools.xssFilter(req.body.id),tools.xssFilter(req.body.k),tools.xssFilter(req.body.v));
	res.send('true');
}
module.exports = home;
