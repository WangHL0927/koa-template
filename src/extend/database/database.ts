import pg from 'pg';
import { camelizeKeys } from 'humps';
import { createLogger } from '../logger';
import { environment } from '../../../environment';

import { DBTransactionError } from './type';


const logger = createLogger('database');

class Database {

  pool: pg.Pool;

  constructor() {
  }

  async init(url: string) {
    this.pool = new pg.Pool({connectionString: url});
    await this.pool.query('select now();');
  }

  query(sql: string, params?: any[]) {
    logger.info(sql, params);
    return new Promise(async (resolve, reject) => {
      await this.pool.query(sql, params).then(res => {
        res.rows = camelizeKeys(res.rows) as any;
        resolve(res);
      }).catch(e => {
        logger.warn('db error.', e.detail);
        reject(e.detail);
      });
    });
  }

  transaction(taskList: { sql: string, params?: any[] }[]) {
    return new Promise(async (resolve, reject: (reason: DBTransactionError) => void) => {
      logger.debug('db', 'start transaction...');
      const client = await this.pool.connect();
      let step = 0;
      try {
        for (const task of taskList) {
          if (!environment.production) {
            logger.info(task.sql, task.params);
          }
          step = taskList.indexOf(task);
          await client.query(task.sql, task.params);
        }
        await client.query('COMMIT');
        resolve();
      } catch (e) {
        await client.query('ROLLBACK');
        logger.warn('db error.', e.detail);

        if (e.code === '23505') {
          reject(new DBTransactionError(step, 2001, e.detail));
        }

        reject(new DBTransactionError(step, e.code, e.detail));
      } finally {
        client.release();
      }
      logger.debug('db', 'transaction end!');
    });

  }

}

const db = new Database();
export default db;
