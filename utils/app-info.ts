import packageInfo from '../package.json'

export class TypeAppInfo {
    name: string
    version: string
    description?: string
    author?: string
}

export class AppInfo {
    protected appInfo: TypeAppInfo

    constructor() {
        this.init()
    }
    init() {
        this.appInfo = {
            name: packageInfo.name,
            version: packageInfo.version,
            description:packageInfo.description,
            author: packageInfo.author
        }

    }
    getAppInfo() {
        return this.appInfo
    }

    printAppInfo(){
        console.info('Name:', this.appInfo.name)
        console.info('Version:',this.appInfo.version)
        console.info('Description:',this.appInfo.description)
    }
}






