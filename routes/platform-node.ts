import Router from 'koa-router'

import { AlertService } from '../service/alert'

const router = new Router()

router.all('/ping', (ctx) => ctx.body = 'pong!')

export default router
