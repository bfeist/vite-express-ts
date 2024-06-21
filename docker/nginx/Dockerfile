ARG NGINX_BASE_IMAGE=nginx:1.23.0-alpine
ARG NODE_BASE_IMAGE=node:20.9.0-alpine

### Build the React client
FROM $NODE_BASE_IMAGE as builder

RUN mkdir /clientsrc
WORKDIR /clientsrc

# Prepare for build
RUN pwd
COPY package*.json ./

RUN npm ci
# copy the rest of the files
COPY . /clientsrc

# Build the React client
RUN npm run vite:build



### Use NGINX to serve the app
FROM $NGINX_BASE_IMAGE as base

# Copy built files to nginx root
COPY --from=builder /clientsrc/.local/vite/dist /usr/share/nginx/html

# Copy Nginx config file
COPY /docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Add custom entrypoint
COPY /docker/nginx/docker-entrypoint.sh /
RUN dos2unix /docker-entrypoint.sh

# Remove unneeded entrypoint files.
RUN rm -rf /docker-entrypoint.d && \
    chmod +x /docker-entrypoint.sh

ENTRYPOINT [ "/docker-entrypoint.sh" ]

# This image is intended to be run with docker-compose. See docker-compose*.yml files for necessary
# environment variables
CMD ["nginx", "-g", "daemon off;"]
