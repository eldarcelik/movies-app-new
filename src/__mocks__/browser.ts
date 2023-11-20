import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

const worker = setupWorker(...handlers);

beforeAll(() => worker.start());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => worker.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => worker.stop());

export default worker;
