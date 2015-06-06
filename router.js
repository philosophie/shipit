var router = require('koa-router')(),
    parseRequestBody = require('koa-better-body'),
    latestDeploy;

router.post('/', parseRequestBody(), function *(){
  latestDeploy = this.request.body.fields;
  this.status = 201;
});

router.get('/', function *(){
  this.body = latestDeploy ? latestDeploy.app : 'No deploy';
});

module.exports = router;
