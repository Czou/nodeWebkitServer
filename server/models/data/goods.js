/**
 * Created with JetBrains WebStorm.
 * User: 乔祝垒
 * Date: 13-12-5
 * Time: 上午9:48
 * To change this template use File | Settings | File Templates.
 */

var Goods={},
	sqlite3=require('sqlite3').verbose(),
	db=new sqlite3.Database('data.sqlite');
/**
 * 创建新商品
 * @param goodsInfo
 * @param callback
 */
Goods.insert = function(goodsInfo, callback){
	db.serialize(function() {
		db.run("INSERT into [goods] (name,norms,unit,assist,price,sale,number,assistNumber) values ('"+goodsInfo.name+"','"+goodsInfo.norms+"','"+goodsInfo.unit+"','"+goodsInfo.assist+"',"+goodsInfo.price+","+goodsInfo.sale+","+goodsInfo.number+","+goodsInfo.assistNumber+")");
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
Goods.update = function(id, key, value) {
	db.run("update goods set "+key+" = ? where id = ?",[value,id]);
}

/**
 * 删除用户
 * @param id 用户id
 */
Goods.del=function(id) {
	db.run("delete from user where id = ?",[id]);
}
/**
 * 获取用户列表
 * @param kw
 * @param cp
 * @param callback
 */
Goods.page = function(kw,cp,callback) {
	db.all("select * from [goods]",function(err,rows) {
		callback(err,rows);
	});
}


module.exports = Goods;