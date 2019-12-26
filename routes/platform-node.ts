import Router from 'koa-router'

const router = new Router()

router.all('/ping', (ctx) => ctx.body = 'pong!')

export default router
