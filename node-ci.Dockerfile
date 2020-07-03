# -----------------------
# Base
# -----------------------
FROM node:12.16.3-alpine3.9 as base
WORKDIR /home/node/app
EXPOSE 3000

# Install missing APK dependencies.
RUN apk add libc6-compat
# See: https://github.com/nodejs/docker-node/issues/282
RUN apk add --virtual .gyp python make g++

# -----------------------
# Dependencies
# -----------------------
FROM base as provision
ARG NPM_TOKEN

# COPY .npmrc .npmrc
COPY package.json yarn.lock lerna.json babel.config.js tsconfig.json ./

COPY packages/website/package.json ./packages/website/

RUN yarn --pure-lockfile