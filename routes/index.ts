import Router from 'koa-router'

import routerPHM from './platform-phm'
import routerNode from './platform-node'
import routerAI from './platform-ai'
import routerDevOps from './platform-devops'

export const router = new Router({
    prefix: '/platform-devops/api/v1/message',
})

router.all('/ping', (ctx) => ctx.body = 'pong!')
router.use('/platform-phm', routerPHM.routes(), routerPHM.allowedMethods())
router.use('/platform-ai', routerAI.routes(), routerAI.allowedMethods())
router.use('/platform-node', routerNode.routes(), routerNode.allowedMethods())
router.use('/platform-devops', routerDevOps.routes(), routerDevOps.allowedMethods())

export default router
