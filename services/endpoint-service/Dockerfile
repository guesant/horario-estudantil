FROM node:18-alpine as base
RUN apk update && apk add git
WORKDIR /app

FROM base as prod-deps
COPY package.json package-lock.json ./
RUN npm install --omit=dev

FROM prod-deps as dev-deps
RUN npm install

FROM dev-deps as assets
COPY . .
RUN npm run build
RUN rm -rf node_modules

FROM prod-deps
COPY --from=assets /app /app
WORKDIR /app
CMD npm run db:migrate && npm run seed:run && npm run start:prod
