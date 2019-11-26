FROM node:10.15-alpine

WORKDIR /app

RUN apk add --update-cache python make g++ curl

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY next.config.js .
COPY ./components ./components
COPY ./pages ./pages

RUN yarn build
EXPOSE 3000
CMD ["yarn","start"] 
