# Dockerfile for frontend

FROM node:23

WORKDIR /usr/src/app

COPY package.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]