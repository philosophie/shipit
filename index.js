'use strict';

var path = require('path'),
    fs = require('fs'),
    staticCache = require('koa-static-cache'),
    parseRequestBody = require('koa-better-body'),
    app = require('koa.io')(),
    router = require('koa-router')();

router.post('/', parseRequestBody(), function *(){
  app.io.emit('app deployed', this.request.body.fields);
  this.status = 201;
});

router.get('/', function *(){
  this.body = fs.createReadStream(path.join(__dirname, 'public/index.html'));
  this.type = 'html';
});

app.use(staticCache(path.join(__dirname, 'public')));
app.use(router.routes());

app.listen(process.env.PORT || 3000);
