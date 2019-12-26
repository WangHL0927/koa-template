import Router from 'koa-router'

import { checkToken } from '../middleware/auth'

import { test } from '../service/test'
import { postMessage } from '../service/post-message'

const router = new Router()

router.all('/ping', (ctx) => ctx.body = 'pong!')
router.post('/postMessage', checkToken, postMessage)
router.post('/test', checkToken, test)

export default router
