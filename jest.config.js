/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$$': '<rootDir>/src/constants/$1',
    '^context/(.*)$': '<rootDir>/src/context/Context',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^apis/(.*)$': '<rootDir>/src/apis/$1',
  },
};
