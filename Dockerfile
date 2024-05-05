FROM node:20.4.0-alpine

WORKDIR /app
COPY src /app/src
COPY public /app/public
COPY package.json /app/
COPY postcss.config.js /app/
COPY tailwind.config.js /app/
COPY yarn.lock /app/
COPY tsconfig.json /app/

RUN yarn install

CMD ["yarn", "start"]