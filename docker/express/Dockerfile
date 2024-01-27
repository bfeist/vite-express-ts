# Base image optionally from arg
ARG EXPRESS_BASE_IMAGE=node:20.11.0-alpine

# # # # # # # #
# BASE image  #
# # # # # # # #
FROM $EXPRESS_BASE_IMAGE as base

RUN mkdir /serversrc
WORKDIR /serversrc


# # # # # # # # #
# BUILDER image #
# # # # # # # # #
FROM base AS builder

COPY package*.json .
RUN npm install

COPY . /serversrc
RUN npm run api:build

# # # # # # # #
# PROD image  #
# # # # # # # #
FROM $EXPRESS_BASE_IMAGE AS prod

# Copy build file
COPY --from=builder /serversrc/.local/express/dist/api.js /

# This image is intended to be run with docker-compose. See docker-compose.dev.yml for necessary
# environment variables
CMD "node" "/api.js"


# # # # # # #
# DEV image #
# # # # # # #
FROM base AS dev

COPY . /serversrc

COPY /docker/express/docker-dev-entrypoint.sh /docker-entrypoint.sh
RUN dos2unix /docker-entrypoint.sh && \
  chmod +x /docker-entrypoint.sh
  
ENTRYPOINT [ "/docker-entrypoint.sh" ]

# This image is intended to be run with docker-compose. See docker-compose.dev.yml for necessary
# environment variables
CMD ["npm", "run", "start"]
