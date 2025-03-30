FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY . .

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]