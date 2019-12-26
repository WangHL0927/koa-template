import Koa from 'koa'
import logger from '@pi2star/logger'

import { middleware } from './middleware'

import * as rmq from './utils/rmq'
import * as appInfo from './utils/app-info'

async function initServer(port: number = 8080) {
    const app = new Koa()
    middleware(app);
    app.listen(port)
    console.info('server listening at:', port)
}

async function main() {
    logger()
    appInfo.getAppInfo()
    
    //rmq
    console.info('connect RMQ...')
    rmq.init('amqp://platform-devops:eMCNB3U6RfcfAeJAnW2Fn2L4@101.201.225.193:5672/platform-devops')
    
    // server
    console.info('init server...')
    initServer(8080)
}

main().catch(console.error)
