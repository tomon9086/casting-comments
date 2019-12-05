FROM node:10.13-alpine

ARG YARN_VERSION=1.16.0
RUN npm install --global yarn@${YARN_VERSION}

WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --silent --production=false
CMD yarn build
