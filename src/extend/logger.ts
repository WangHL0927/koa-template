import { configure, getLogger } from 'log4js';

import { environment } from '../../environment';

export function createLogger(category: string) {
  const logger = getLogger(category);
  logger.level = environment.logLevel;
  return logger;
}

