import Router from 'koa-router';

const router = new Router();

import * as test from '../controller/test';
import { BaseSuccess } from '../types/baseOutput';

// router logic
// router.all('/ping', (ctx) => ctx.body = {status: 'success', msg: 'pong!'});
router.all('/ping', (ctx) => ctx.body = new BaseSuccess());
router.get('/get', test.get);
router.post('/post', test.post);

export default router;
