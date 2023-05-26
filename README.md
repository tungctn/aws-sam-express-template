# ExpressJS + AWS SAM + MongoDB Boilerplate
ExpressJS + AWS SAM + MongoDB Boilerplate is a powerful starter kit for building serverless applications.

## Overview

This template provides a boilerplate setup for building a serverless backend application using ExpressJS, AWS SAM, and MongoDB. It leverages the AWS CloudFormation service to deploy the necessary resources, including API Gateway, Lambda functions, and a MongoDB database.

## Technologies 

The technologies used in this repo include:

**AWS SAM**: AWS Serverless Application Model is a simple framework for deploying serverless applications on AWS.

**ExpressJS**: A popular backend framework for Node.js, enabling easy building of RESTful APIs.

**MongoDB**: A popular NoSQL database, allowing for flexible and scalable data storage.

## Usage Instructions

To use this template, you need to have AWS CLI and AWS SAM CLI installed on your computer.

1. Use the following command to configure AWS CLI:


```
aws configure
```

2. Use the following commands to build and deploy your application on AWS:


```
sam build
```


```
sam deploy --guided
```

The `sam build` command will create the necessary files to deploy your application, while the `sam deploy` command will deploy your application on AWS.

3. Run on a local machine.

cd server

```
npm start
```

After deploying your application, you can access the created API Gateway and use the endpoints to manipulate data.
