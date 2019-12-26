import Koa from 'koa'
import logger from '@pi2star/logger'
import { AppInfo } from './utils/app-info'



async function main() {
    logger()
    const appInfo = new AppInfo()
    appInfo.printAppInfo()
    
}


main().catch(console.error)
