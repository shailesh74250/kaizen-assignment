export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',  // Correct environment setup
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
   // Optional: if you're using 'babel-jest' or similar transformer
   transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-css',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

  