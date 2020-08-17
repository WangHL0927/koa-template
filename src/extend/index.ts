import { createLogger } from './logger';
import db from './database/database';

import { environment } from '../environments/environment';


const logger = createLogger('extend');

export async function initExtend() {
  // logger.info('Init database...');
  // await db.init(process.env.DB_URL || environment.db_url);
  // logger.info('Init database success');

}

