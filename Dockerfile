# Minimal Development Container
# Consistent environment to deploy to AWS
FROM node:4.4.6

# Install serverless & eslint
RUN npm install -g serverless@1.9.0 && \
    npm dedupe -g

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add the project source and mv node_modules directories
COPY src /usr/src/app

CMD ["bash"]
