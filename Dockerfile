from node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4173

CMD [ "npm", "run", "preview" ]