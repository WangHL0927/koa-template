import { Success, Error } from '../define/response'

export async function checkParams(ctx, next, target: object = {}) {
    const body = ctx.request.body;
    for (const key in target) {
        if (typeof body.key === 'string' && !body.key) {
            ctx.body = new Error('Missing parameter!')
        } else {
            return next()
        }
    }
}
