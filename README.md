# Overview

This is a template using AWS SAM to deploy a serverless web application, combined with the ExpressJS backend framework and MongoDB database. The template is pre-configured for the API Gateway and Lambda function services, using AWS CloudFormation.

# Technologies 

The technologies used in this repo include:

AWS SAM: AWS Serverless Application Model is a simple framework for deploying serverless applications on AWS Lambda and API Gateway.

ExpressJS: A popular backend framework for Node.js, enabling easy building of RESTful APIs.

MongoDB: A popular NoSQL database, allowing for flexible and scalable data storage.

# Usage Instructions

To use this template, you need to have AWS CLI and AWS SAM CLI installed on your computer.

Use the following command to configure AWS CLI:


```
aws configure
```

Use the following commands to build and deploy your application on AWS:


```
sam build
```

Copy

```
sam deploy --guided
```

The sam build command will create the necessary files to deploy your application, while the sam deploy command will deploy your application on AWS.

After deploying your application, you can access the created API Gateway and use the endpoints to manipulate data.
