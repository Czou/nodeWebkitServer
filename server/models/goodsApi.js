/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-10 上午11:05
 * --------------------------------------------------------
 */
var goodApi = {},
	Goods= require('./data/goods.js')
config=require('../config/config.js'),
	md5 =require('../lib/tools').md5;


goodApi.insert=function(goodsInfo,callback){
	Goods.insert(goodsInfo,function(err,doc){
		callback(err,doc);
	})
}

goodApi.page = function(kw,cp,callback) {
	Goods.page(kw,cp,function(err,rows) {
		callback(err,rows);
	});
}
/**
 * 更新用户密码
 * @type {document.password|connection.password|*|object.auth.password|password|config.password}
 */
goodApi.update = function(id,key,value) {
	Goods.update(id,key,value);
}

goodApi.del = function(id) {
	Goods.del(id);
}

module.exports = goodApi;