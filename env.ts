// global env

export const DEBUG = process.env.NODE_ENV && process.env.NODE_ENV === 'debug' || false;

export const DEVOPS_RMQ_URL = DEBUG ? process.env.DEVOPS_RMQ_URL : ''

export const rmq_publish_exchange = 'exchange.devops.message.push'

