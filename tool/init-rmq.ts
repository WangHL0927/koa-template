import amqplib from 'amqplib';

const RMQ_URL = '';

async function main() {
    // Init Connection && Channel
    const connection = await amqplib.connect(RMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertExchange('exchange.devops.message.push', 'fanout');
    await channel.assertQueue('queue.devops.message.push');
    await channel.bindQueue('queue.devops.message.push', 'exchange.devops.message.push', '');
    await channel.close();
    await connection.close();
    console.log('Done');
}

main().catch(console.error);
