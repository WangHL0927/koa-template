import Koa from 'koa';

import * as buildInfo from '../package.json';

import { createLogger } from './extend/logger';
import { initExtend } from './extend';
import middleware from './middleware';

const logger = createLogger('app');

export async function startServer() {
  logger.info('Name:', buildInfo.name);
  logger.info('Version:', buildInfo.version);

  logger.info('Start server...');
  logger.info('Init extends...');
  await initExtend();
  logger.info('Init extends success.');

  const app = new Koa();
  middleware(app);
  const port = 8080;
  app.listen(port);

  logger.info('Server listening port: ' + port);
}

