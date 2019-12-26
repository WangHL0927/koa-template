import amqplib from 'amqplib';
import { ConfirmChannel } from 'amqplib'

import { DEVOPS_RMQ_URL, rmq_publish_exchange } from '../env'

let channel: ConfirmChannel = null

export async function init(url?: string) {
    url = url ? url : DEVOPS_RMQ_URL
    const connect = await amqplib.connect(url);
    channel = await connect.createConfirmChannel();
    console.info('RMQ connected!')
    return channel
}

export async function publish(queue: string, message: object | string, routingKey = '', params = { persistent: true }) {
    await channel.publish(queue, routingKey, Buffer.from(JSON.stringify(message)), params);
    console.info('RMQ published!', queue)
}

export type NoticeType = 'mail' | 'sms' | 'phone' | 'weChat'

export class TypeNoticeMessage {
    id: string
    type: NoticeType
    title: string
    content: string
    timestamp: string
    createdAt: string
}
export async function publishNotice(message: object | string) {
    await publish(rmq_publish_exchange, message, '')
}
