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
	orderApi=require('../../models/orderApi.js'),
	config=require('../../config/config.js'),
	customApi = require('../../models/customApi.js'),
	async=require('async');

home.index = function(req, res){
//	//res.render('settingnav');
}

home.page = function(req, res) {
	orderApi.page(0,'', 1,0, function(err, rows) {
		if(err) {
			res.send(err);
			return;
		}
		res.render('ajax/compingpage',{rows: rows});
	});
}


module.exports = home;
