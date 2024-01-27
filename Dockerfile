FROM node:alpine as dev
WORKDIR /app
COPY . .
RUN npm i
CMD [ "npm","run","dev" ]

FROM node:alpine as live
WORKDIR /app
COPY . .
RUN npm i && npm run build
EXPOSE 3000
CMD [ "npm","run","start" ]