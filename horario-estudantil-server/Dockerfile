FROM node:16-alpine as builder
RUN apk update && apk add git
WORKDIR /app
COPY ./yarn.lock ./package.json ./
RUN yarn --network-timeout 100000
COPY . .
RUN yarn
RUN yarn build

FROM node:16-alpine
COPY --from=builder /app /app
WORKDIR /app
CMD yarn run db:migration:run && yarn start 
