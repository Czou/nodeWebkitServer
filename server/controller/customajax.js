/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-10 上午11:08
 * --------------------------------------------------------
 */
var home = {},
	tools=require('../lib/tools.js'),
	customApi=require('../models/customApi.js'),
	config=require('../config/config.js'),
	async=require('async');

home.index = function(req, res){
	res.render('index');
}

home.page = function(req,res) {
	customApi.page('', 1, function(err, rows) {
		if(err) {
			res.send(err);
			return;
		}
		res.render('ajax/custompage',{rows: rows});
	});
}

home.update = function(req,res) {
	customApi.update(tools.xssFilter(req.body.id),tools.xssFilter(req.body.k),tools.xssFilter(req.body.v));
	res.send('true');
}

module.exports = home;