import cors from '@koa/cors';
import koaBody from 'koa-body';
import koaLogger from 'koa-logger'

import { createLogger } from '../extend/logger';
import router from '../router'

export default function initMiddleware(app) {
  const reqLogger = createLogger('koa')
  app.use(cors());
  app.use(koaLogger(str => reqLogger.info(str)));
  app.use(koaBody());
  app.use(router.routes());
  app.use(router.allowedMethods());
}
