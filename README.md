# Face Tracker

POC to analyze faces with AWS Rekognition. The WebApp is developed with the 
[serverless framework](https://serverless.com/) and deployed on  [AWS Lambda](https://aws.amazon.com/lambda/). 
The WebApp is available on [https://tracker.webmonks.io/](https://ads-api.webmonks.io/).

## Build and run docker

Docker is used as a development environment. All the necessary *npm* packages are included. 

```bash
$ docker-compose build
```

Deploy the code:
```bash
$ docker-compose run app
$ serverless deploy
```

## Awesome lists

* [Docker](https://github.com/veggiemonk/awesome-docker)
* [Serverless](https://github.com/anaibol/awesome-serverless)
* [AWS](https://github.com/donnemartin/awesome-aws)
