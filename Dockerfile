FROM node:20.4.0-alpine

WORKDIR /app
COPY src /app/src
COPY public /app/public
COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
COPY postcss.config.js /app/
COPY tailwind.config.js /app/

RUN npm install

CMD ["npm", "start"]