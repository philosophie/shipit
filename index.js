'use strict';

var app = require('koa.io')(),
    router = require('./router'),
    path = require('path'),
    staticCache = require('koa-static-cache');

app.use(staticCache(path.join(__dirname, 'public')));
app.use(router.routes());

app.listen(process.env.PORT || 3000);
