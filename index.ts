import { startServer } from './src/app';

async function main() {
  await startServer();
}

main().catch(console.error);
