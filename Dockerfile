FROM node

# Create app directory
WORKDIR /usr/src/app

# installing gatsby
RUN npm i -g gatsby-cli

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm i
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN gatsby build

EXPOSE 8080
CMD ["gatsby", "serve"]