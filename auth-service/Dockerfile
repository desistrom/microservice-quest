FROM bitnami/node:16.15.0

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package.json ./

USER node

# RUN npm set registry=https://registry.npmjs.org/

# RUN npm install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000
