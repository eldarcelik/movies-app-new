/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/jest.polyfills.cjs'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/fileMock.ts',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  fakeTimers: {
    enableGlobally: true,
    legacyFakeTimers: true,
    doNotFake: ['queueMicrotask'],
  },
  clearMocks: true,
  resetMocks: true,
};
