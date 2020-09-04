import cors from '@koa/cors';
import koaBody from 'koa-body';
import koaCompress from 'koa-compress';
import koaLogger from 'koa-logger';
import zlib from "zlib";

import { createLogger } from '../extend/logger';
import router from '../router';

export default function initMiddleware(app) {
  const reqLogger = createLogger('koa');
  app.use(cors());
  app.use(koaLogger(str => reqLogger.info(str)));
  app.use(koaCompress({
    threshold: 2048,
    gzip: {
      flush: zlib.constants.Z_SYNC_FLUSH
    },
    deflate: {
      flush: zlib.constants.Z_SYNC_FLUSH,
    },
    br: {
      flush: zlib.constants.BROTLI_OPERATION_FLUSH,
    }
  }));
  app.use(koaBody());
  app.use(router.routes());
  app.use(router.allowedMethods());
}
