import Router from 'koa-router';

import test from './test';

const router = new Router({
  prefix: '/api/v1'
});

router.all('/ping', (ctx) => ctx.body = {code: 0, msg: 'pong!'});
router.use('/test', test.routes(), test.allowedMethods());

export default router;
