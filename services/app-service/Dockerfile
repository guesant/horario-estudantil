FROM node:18-alpine as base
RUN apk update && apk add git
WORKDIR /app

FROM base as prod-deps
COPY ../app-service_old/package-lock.json package.json ./
RUN npm install --omit=dev

FROM prod-deps as dev-deps
RUN npm install

FROM dev-deps as assets
ARG NEXT_PUBLIC_ENDPOINT_URL
ARG NEXT_PUBLIC_BASE_PATH
COPY ../app-service_old .
RUN npm run build
RUN rm -rf node_modules

FROM prod-deps
COPY --from=assets /app /app
WORKDIR /app
CMD npm run start