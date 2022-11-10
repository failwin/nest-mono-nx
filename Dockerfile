FROM node:16-alpine3.15 as builder

ARG NODE_ENV
ARG BUILD_FLAG

RUN apk add --no-cache python3 make g++

WORKDIR /app/builder
COPY . .
RUN npm i
