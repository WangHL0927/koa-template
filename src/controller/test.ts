import Koa from 'koa';

import { BaseOutput, BaseError, ErrorDB, Success } from '../types/api/output';

import db from '../extend/database';
import { DBTransactionError } from '../types/database/type';

import { ProductLogInput, ResetWorkflowInput, SnScanInput, SnScanListInput } from '../types/api';
import { v4 as uuidV4 } from 'uuid';

import logger from '../extend/logger';


export async function get(ctx: Koa.Context) {
  const query = ctx.request.query;
  const body: SnScanInput = ctx.request.body;

  const productId = uuidV4();
  ctx.body = new Success();

}

