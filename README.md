# Registration Full Stack App
This is a demo project that includes both frontend and backend components. It demonstrates the registration functionality using Angular for the frontend and a Java backend for the backend. 

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Frontend](#frontend)
- [Backend](#backend) 

## Getting Started

### Prerequisites

Before you can run this project, you'll need to have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [npm](https://www.npmjs.com/)  
- [Java](https://www.java.com/en/download/)
- [Maven](https://maven.apache.org/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/tanjounokamioku/registration-full-stack-app.git

### Usage
To run the demo project, you'll need to start both the frontend and backend components.

### Frontend
Navigate to the demo-frontend directory:
 
   ```bash
   cd demo-frontend
```

Install dependencies for the frontend:
  
   ```bash 
   npm install
```

Start the Angular development server:

   ```bash
   ng serve
```

Open your web browser and go to http://localhost:4200 to access the frontend.

### Backend
Navigate to the demo-backend directory:
 
   ```bash
   cd demo-backend
```

Build and run the Java backend using Maven:
 
   ```bash
   mvn clean install
   java -jar target/demo-0.0.1-SNAPSHOT.jar
```

The backend server will be running at http://localhost:8080.
