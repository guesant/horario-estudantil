FROM node:16-alpine as builder
RUN apk update && apk add git
WORKDIR /app
COPY ./yarn.lock ./package.json ./
RUN yarn --network-timeout 100000
COPY . .
RUN yarn
ARG NEXT_PUBLIC_ENDPOINT_URL
RUN yarn build

FROM node:16-alpine
COPY --from=builder /app /app
WORKDIR /app
CMD yarn start
