import uuid from 'uuid'
import { Success, Error, PermissionDenied } from '../define/response'
import { publishNoticeMessage } from '../utils/rmq'
import { TypeNoticeMessage } from '../define/type'

export async function test(ctx) {
    const body: TypeNoticeMessage = ctx.request.body || {}
    body.id = uuid
    try {
        body.createdAt = new Date(body.createdAt).toISOString()
    } catch (e) {
        ctx.body = new Error('createdAt format error!')
    }
    body.createdAt = new Date(body.createdAt).toISOString()
    body.contentType = body.contentType || 'text'
    body.timestamp = new Date().toISOString()
    await publishNoticeMessage(body)
    ctx.body = new Success()
}
