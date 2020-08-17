import Koa from 'koa';

import { BaseOutput, BaseSuccess } from '../types/baseOutput';
// import { v4 as uuidV4 } from 'uuid';

import { createLogger } from '../extend/logger';

const logger = createLogger('test');

export async function get(ctx: Koa.Context) {
  const query = ctx.request.query;
  const body: any = ctx.request.body;

  logger.debug(query);
  logger.debug(body);
  const data = {
    queryParams: query,
    body
  };
  ctx.body = new BaseOutput<any>(data);
}

export async function post(ctx: Koa.Context) {
  const query = ctx.request.query;
  const body: any = ctx.request.body;

  logger.debug(query);
  logger.debug(body);
  const data = {
    queryParams: query,
    body
  };
  ctx.body = new BaseOutput<any>(data);
}


