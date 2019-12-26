import logger from 'koa-logger'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import compress from 'koa-compress'

import router from '../routes'

export function middleware(app) {
    app.use(compress({ threshold: 2048 }))
    app.use(cors())
    app.use(koaBody())
    app.use(logger(str => console.log(str)))
    app.use(router.routes())
    app.use(router.allowedMethods())
}
