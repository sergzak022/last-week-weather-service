FROM node:latest

WORKDIR /app
#copy files from the source of the context of the build to workdir
COPY package*.json ./
#install dependencies from package.json
RUN npm install
#copy the rest of files from the source of the context of the build to workdir
COPY . .
#CMD gets called when container is initialized
CMD node index.js

EXPOSE 3000
