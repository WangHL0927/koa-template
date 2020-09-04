FROM node:12-slim

COPY dist /app

WORKDIR /app

RUN npm config set registry http://registry.npm.taobao.org/ \
    && npm i --production

CMD ["node", "index.js"]
