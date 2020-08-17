import Router from 'koa-router';

import { BaseSuccess } from '../types/baseOutput';

import test from './test';

const router = new Router({
  prefix: '/api/v1'
});

router.all('/ping', (ctx) => ctx.body = new BaseSuccess());
router.use('/test', test.routes(), test.allowedMethods());

export default router;
