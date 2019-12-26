// global env

export const DEBUG = process.env.NODE_ENV && process.env.NODE_ENV === 'debug' || false;

export const DEVOPS_RMQ_URL = DEBUG
    ? 'amqp://platform_devops:XJka4mnDgY3t3twNmU379dBo@101.201.225.193:5672/platform-devops'
    : process.env.DEVOPS_RMQ_URL

export const rmq_publish_exchange = 'exchange.devops.message.push'

