var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();

// creat() call
router.post('/creat', function(req,res){
	var input="";
	console.log(req.body.input);
	exec(__dirname + '/executables/system_calls/creat ' + req.body.input , function callback(error,stdout,stderr) {
		console.log(stdout);
		console.log(error);
		res.send(stdout);
	});
});

// fork() call
router.post('/fork', function(req,res){
	var input="";
	console.log(req.body.input);
	exec(__dirname + '/executables/system_calls/fork ' + req.body.input , function callback(error,stdout,stderr) {
		console.log("Trying to fork!");
		console.log(stdout);
		console.log("now error:");
		console.log(error);
		res.send(stdout);
	});
});

// ls() call
router.post('/ls', function(req,res){
	var input="";
	console.log("Trying to ls before execution!");
	console.log(req.body.input);
	exec(__dirname + '/executables/system_calls/ls ' + req.body.input , function callback(error,stdout,stderr) {
		console.log("now error:");
		console.log(error);
		res.send(stdout);
	});
});

// kill() call
router.post('/kill', function(req,res){
	var input="";
	console.log(req.body.input);
	exec(__dirname + '/executables/system_calls/kill ' + req.body.input , function callback(error,stdout,stderr) {
		console.log(stdout);
		console.log(error);
		res.send(stdout);
	});
});

// open() call
router.post('/open', function(req,res){
	var input="";
	console.log(req.body.input);
	exec(__dirname + '/executables/system_calls/open ' + req.body.input , function callback(error,stdout,stderr) {
		console.log(stdout);
		console.log(error);
		res.send(stdout);
	});
});

// read() call
router.post('/read', function(req,res){
	var input="";
	console.log(req.body.input);
	exec(__dirname + '/executables/system_calls/read ' + req.body.input , function callback(error,stdout,stderr) {
		console.log(stdout);
		console.log(error);
		res.send(stdout);
	});
});

// write() call
router.post('/write', function(req,res){
	var input="";
	console.log(req.body.input);
	exec(__dirname + '/executables/system_calls/write ' + req.body.input , function callback(error,stdout,stderr) {
		console.log(stdout);
		console.log(error);
		res.send(stdout);
	});
});

// man() call
router.post('/man', function(req,res){
	var input="";
	console.log(req.body.input);
	exec(__dirname + '/executables/system_calls/man ' + req.body.input , function callback(error,stdout,stderr) {
		console.log(stdout);
		console.log(error);
		res.send(stdout);
	});
});

module.exports=router;
