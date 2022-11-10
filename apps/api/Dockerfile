FROM nest-mono-nx:base AS builder

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder
COPY . .
RUN npx nx build api ${BUILD_FLAG}

FROM nest-mono-nx:base

WORKDIR /app
COPY --from=builder /app/builder ./

ENV NODE_ENV=$NODE_ENV
ENV PORT=3000

EXPOSE 3000

CMD ["node", "./dist/apps/api/main.js"]
