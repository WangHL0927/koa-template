import packageInfo from '../package.json'

export class TypeAppInfo {
    name: string
    version: string
    description?: string
    author?: string
}

export function getAppInfo(): TypeAppInfo {
    return {
        name: packageInfo.name || 'none',
        version: packageInfo.version || 'none',
        description: packageInfo.description || 'none',
        author: packageInfo.author || 'none',
    }
}







