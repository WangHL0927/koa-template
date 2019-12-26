FROM node:12-slim

WORKDIR /app

COPY . .

RUN npm config set registry http://registry.npm.taobao.org/

RUN npm install && npm install -g typescript && tsc

CMD ["node", "index.js"]
