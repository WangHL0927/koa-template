import { Success, PermissionDenied } from '../define/response'

export async function checkToken(ctx, next) {
    const token = ctx.request.header.token;
    // check token
    if (token === 'please!') {
        return next();
    }
    
    console.error('token error!', token)
    ctx.body = new PermissionDenied()
}

export async function checkUserId(ctx, next) {
    const userId = ctx.request.header.userId;
    return next();
    ctx.body = new PermissionDenied()
}
