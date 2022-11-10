FROM nest-mono-nx:base AS builder

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder
COPY . .
RUN npx nx build authors ${BUILD_FLAG}

FROM nest-mono-nx:base

WORKDIR /app
COPY --from=builder /app/builder ./

ENV NODE_ENV=$NODE_ENV
ENV PORT=3001

EXPOSE 3001

CMD ["node", "./dist/apps/authors/main.js"]
