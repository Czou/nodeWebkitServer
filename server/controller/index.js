
var home = {},
    redisCache=require('../lib/redisApi.js'),
    tools=require('../lib/tools.js'),
    userApi=require('../models/userApi.js'),
    config=require('../config/config.js'),
    async=require('async');

home.index = function(req, res){
    res.render('index');
}

module.exports = home; 