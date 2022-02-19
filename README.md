# Jamstack App

Jamstack projects separate the frontend from the backend apps and databases. Freed from backend servers, the frontend can then be deployed globally, directly to a CDN whilst dynamic content can be served via APIs - thus allowing for increased performance and security whilst allowing for more modular development.

## Description

Creating a URL redirector for mobile app links to the corresponding app stores using AWS Lambda, API Gateway and DynamoDB e.g. if an iPhone user visits the URL, it will redirect them to the App Store - complimented with a website built using ReactJS to table the stat counts.

## Demo

Visit https://serverless-react-app.netlify.app

## Installation

1. Clone this repo
2. `npm install`
5. `npm start`

## Walkthrough

1. Head over to the AWS console and create a DynamoDB table.
2. Create IAM roles with custom policies. The first role and policy should only have read access (scan and query) to the DynamoDB table whereas the second role and policy should only have write access (put item) for enhanced security.
3. Create the first Lambda function which analyses the "User-Agent" from the event's headers to define the redirect URL. The function should also write a record to the DynamoDB table every time it's triggered e.g. every time a redirect occurs, create a record in the table which notes the OS.
4. Assign the write access IAM role to this Lambda function.
5. Head over to API Gateway in the AWS console to create a REST API endpoint which invokes the Lambda function.
6. You can now test and deploy the first API.
7. Create a second Lambda function and REST API endpoint - this second Lambda function should read the DynamoDB table to get the count of records by OS (hence the read access IAM role).
8. Create a frontend application using React, a framework fo your choice or none at all.
9. The frontend can now make API calls to the second Lambda function to serve dynamic content (display a table of the number of redirects by OS).
10. Deploy the frontend to Netlify.
