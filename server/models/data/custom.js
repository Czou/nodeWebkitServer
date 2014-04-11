/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-5
 * Time: 上午9:48
 * To change this template use File | Settings | File Templates.
 */

var Custom={},
	sqlite3=require('sqlite3').verbose(),
	db=new sqlite3.Database('data.sqlite');
/**
 * 创建新用户
 * @param customInfo
 * @param callback
 */
Custom.insert = function(customInfo, callback){
	db.serialize(function() {
		db.run("INSERT into [custom] (user,company,phone,telphone,area,express) values ('"+customInfo.user+"','"+customInfo.company+"','"+customInfo.phone+"','"+customInfo.telphone+"','"+customInfo.area+"','"+customInfo.express+"')");
		db.get("select last_insert_rowid() id",function(err,doc) {
			callback(err,doc);
		});
	});
}

/**
 * 修改字段
 * @param id  id
 * @param key 字段
 * @param value 字段的值
 */
Custom.update = function(id, key, value) {
	db.run("update custom set "+key+" = ? where id = ?",[value,id]);
}

/**
 * 删除用户
 * @param id 用户id
 */
Custom.del=function(id) {
	db.run("delete from user where id = ?",[id]);
}
/**
 * 获取用户列表
 * @param kw
 * @param cp
 * @param callback
 */
Custom.page = function(kw,cp,callback) {
	db.all("select * from [custom]",function(err,rows) {
		callback(err,rows);
	});
}


module.exports = Custom;