Todo App
This project is a simple Todo application built with React and AWS Amplify. It allows users to create, update, delete, and fetch todos. The application is containerized using Docker and can be deployed to a Kubernetes cluster.

Tech Stack
Frontend: React with JavaScript
Backend: AWS AppSync and GraphQL
Authentication: AWS Cognito
Database: AWS DynamoDB
Getting Started
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start: Runs the app in development mode. Open http://localhost:3000 to view it in your browser.
npm test: Launches the test runner in interactive watch mode.
npm run build: Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Tech stack : 
React with javascript
AWS Appsync and Graphql
Authentication : AWS cognito pool
Database :  AWS dyanamo db 
 
Docker Setup 

Build the Docker image:
docker build -t todo-app:v1 . 

Run the container: 
docker run -d -p 5000:5000 todo-app:v1

Deploy to Kubernetes
# Apply the deployment
kubectl apply -f deployment.yaml

# Verify deployment
kubectl get pods
kubectl get services


AWS Amplify Backend
The application uses AWS Amplify to provide:

GraphQL API with AWS AppSync
Authentication with Amazon Cognito
Database with Amazon DynamoDB
Hosting with Amazon S3 and CloudFront
Architecture

The application follows a serverless architecture pattern:

React frontend for the user interface
AWS AppSync for GraphQL API management
AWS Cognito for user authentication and authorization
AWS DynamoDB for data storage
Docker for containerization
Kubernetes for container orchestration