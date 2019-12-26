import Router from 'koa-router'

import { checkParams } from '../middleware/params-check'
import { test } from '../service/test'
import { postMessage } from '../service/post-message'
import { TypeNoticeMessage } from '../define/type'
import { checkToken } from '../middleware/auth'

const router = new Router()

router.all('/ping', (ctx) => ctx.body = 'pong!')
router.post('/postMessage', checkToken, postMessage)
router.post('/test', checkToken, test)

export default router
