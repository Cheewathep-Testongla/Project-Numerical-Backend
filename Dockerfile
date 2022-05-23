FROM node:16.13.2

# Create Directory 
RUN mkdir /backend

WORKDIR /backend

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . /backend/

COPY Chapter.json /backend/

COPY package.json /backend/ 

RUN npm install

RUN npm install react-scripts -g 

# RUN yarn install

CMD ["node","./server.js"]