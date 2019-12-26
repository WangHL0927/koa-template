export class Success {
    constructor(msg?: string) {
        return {
            status: 'ok',
            msg: msg || 'success',
        }
    }
}

export class PermissionDenied {
    constructor(msg?: string) {
        return {
            status: 'error',
            msg: msg || 'Fuck off',
        }
    }
}

export class Error {
    constructor(msg?: string) {
        return {
            status: 'error',
            msg: msg || 'Fuck off',
        }
    }
}
