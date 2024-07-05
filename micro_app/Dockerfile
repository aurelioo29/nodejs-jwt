FROM node:14
WORKDIR /micro_app
COPY package.json .
RUN npm install
COPY . .
CMD npm start
