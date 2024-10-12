# Kaizen Assignment
The Kaizen Assignment application built with React, Typescript and Vite. It is frontend application which provides list of users and users details.

## Table of Contents
    1.  Overview  
    2.  Features  
    3.  Prerequisites  
    4.  Installation
    5.  Available Scripts  
    6.  Project Structure
    7.  Development
    8.  Build for Production  
    9.  Running Tests
    10. Linting and Formatting
    11. Deploy to Staging
    12. Deploy to Production
    13. Configuration
    14. Contributing
    15. License

### Overview
This project is a Kaizen recrutment assignment build with a modern front tech stack using React, TypeScript, and Vite. It features a users list, search user by name and user details.

### Features
- List of Users
- Search user by name
- User details

### Prerequisites
To run this project, ensure you have the following tools installed on your system:
  1. Node.js (version 16.x or later) 
  2. npm or yarn (for package management)  

### Installation
  1. Clone the repository:
    - git clone https://github.com/shailesh74250/kaizen-assignment.git
  2. Go to project directory: cd kaizen-assignment
  3. Install the project dependencies:
    - npm install or yarn install

### Available Scripts  
    1. npm run dev (Runs the app in development mode.)
    2. npm run build (Builds the app for production to the dist folder.)    
    3. npm run preview (After building the app, use this command to serve the production build locally to test it.)
    4. npm run lint (Runs ESLint to check for code quality and Prettier to check code formatting. Errors and warnings will be displayed in the console.) 
    5. npm run test (Runs the unit tests using Jest or Cypress for end-to-end testing. Modify as per your setup.)
    6. cypress:open (Open Cypress UI and Run test cases with UI)
    7. test:e2e (Run cypress test in console)


### Project Structure
```
├── public/               # Static assets
├── src/                  # Source code
│   ├── assets/           # Images, fonts, static assets
│   ├── components/       # Reusable components
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Page components
│   ├── services/         # API calls, service functions
│   ├── store/            # Redux or state management logic
│   ├── styles/           # Global styles (CSS/SCSS)
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Vite's entry point
│   └── index.html        # Main HTML template
├── tests/                # Test files
├── .eslintrc.js          # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── package.json          # Project metadata and dependencies
└── README.md             # This file
```

### Run development server
Use the following command to start the development server. Open your browser at http://localhost:5173:
- Create a .env file in the project root directory, then copy the contents from .env.example and update the values as needed.
- Start Development Server: npm run dev
- The development server. Open your browser at http://localhost:5173

### Build for Production
To create an optimized production build, run: npm run build
This will bundle your application and output the assets into the dist directory. The assets are optimized, minified, and ready to be deployed.

### Running Tests
1. Running Unit Tests: npm run test
2. End-to-End Testing: npm run e2e

### Linting and Formatting
This project uses ESLint for static code analysis and Prettier for code formatting.
To lint and format your code, run: npm run lint

### Deploy to Staging
Deployment Pipeline setup with GitHub Actions and Vercel. 
For staging deployment just push to the development branch, It will build and deploy to dev instance.
Staging App URL - https://kaizen-assignment-git-ebe8dd-shailesh-kumars-projects-1873d7c3.vercel.app/ 

### Deploy to Production
Deployment Pipeline setup with GitHub Actions and Vercel. 
For staging deployment just push to the main branch, It will build and deploy to production instance.
Production App URL - https://kaizen-assignment-git-ebe8dd-shailesh-kumars-projects-1873d7c3.vercel.app/ 

### Configuration
1. Vite Configuration
Vite's configuration file is located at vite.config.ts. This file allows you to configure build settings, plugins, and more.

2. TypeScript Configuration
The TypeScript configuration can be found in tsconfig.json. This contains the compiler options and type-checking rules for the project.


### Contributing
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Open a pull request.

### License
This project is licensed under the MIT License.
