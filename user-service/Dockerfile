FROM bitnami/node:16.15.0

WORKDIR /app

COPY package.json ./

USER node

COPY --chown=node:node . .

EXPOSE 3001
