FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Case enterprise connections for npm set proxy on ENV
#ENV http_proxy "http://..."
#ENV https_proxy "http://..."


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]