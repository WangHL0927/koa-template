export type TypeNoticeMessageType = 'mail' | 'sms' | 'phone' | 'weChat'

export class TypeNoticeMessage {
    id: string // uuid
    user: string // uuid
    createdAt: string
    type: TypeNoticeMessageType
    receivers: string[]
    title: string
    content: string
    contentType?: 'text' | 'html'
    timestamp?: string
}
