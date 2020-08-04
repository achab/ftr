FROM node:12 as build

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm ci

COPY . .
RUN npm run build

RUN npm prune --production

FROM node:12-alpine as run

WORKDIR /usr/src/app

USER node
EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

COPY --from=build --chown=node:node  /usr/src/app/dist ./dist
COPY --from=build --chown=node:node  /usr/src/app/node_modules ./node_modules

CMD [ "node", "dist/main"]
