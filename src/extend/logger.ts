import { configure, getLogger } from 'log4js';

import { environment } from '../environments/environment';

export function createLogger(category: string) {
  const logger = getLogger(category);
  logger.level = environment.log_level;
  return logger;
}

