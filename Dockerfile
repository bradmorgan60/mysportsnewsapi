FROM node:16
WORKDIR /Users/bradmorgan60/documents/api/espn-api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]



