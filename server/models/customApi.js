/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-10 上午11:05
 * --------------------------------------------------------
 */
var customApi = {},
	Custom= require('./data/custom.js')
config=require('../config/config.js'),
	md5 =require('../lib/tools').md5;


customApi.insert=function(customInfo,callback){
	Custom.insert(customInfo,function(err,doc){
		callback(err,doc);
	})
}

customApi.page = function(kw,cp,callback) {
	Custom.page(kw,cp,function(err,rows) {
		callback(err,rows);
	});
}
/**
 * 更新用户密码
 * @type {document.password|connection.password|*|object.auth.password|password|config.password}
 */
customApi.update = function(id,key,value) {
	Custom.update(id,key,value);
}

customApi.del = function(id) {
	Custom.del(id);
}

module.exports = customApi;