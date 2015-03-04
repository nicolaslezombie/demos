console.log('iciiiiiiiiiiiiiiiiiiiiiii');

//var log = require('./log4js.cfg').LOG;

	//log.info('Launching service...');


// Requirements ========================================================
	var express      = require('express');
	var app          = express();
	var bodyParser   = require('body-parser');
	var cookieParser = require('cookie-parser')
	var httpServer   = require('http').Server(app);

// global vars ===============================================================
	var HTTP_PORT    = 80;
	
// Web config ===============================================================
	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
	app.use(cookieParser());
	
// go
  httpServer.listen(HTTP_PORT, function(){
    //log.info("Http server ready : listening on port " + HTTP_PORT);
  });
  
  app.get('/', function(req, res) {
		res.send('hello world');
    });
