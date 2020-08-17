import Router from 'koa-router';

const router = new Router();

// router logic
router.all('/ping', (ctx) => ctx.body = {status: 'success', msg: 'pong!'});
router.get('/get', (ctx) => ctx.body = {status: 'success', msg: 'pong!'});
router.post('/post', (ctx) => ctx.body = {status: 'success', msg: 'pong!'});

export default router;
