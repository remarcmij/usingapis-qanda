import successResponse from './success-response.js';
import errorResponse from './error-response.js';

const VALID_URL = 'http://hackyourfuture.nl/api/students/class45';

async function fakeFetch(url) {
  if (url === VALID_URL) {
    return {
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => JSON.parse(successResponse),
    };
  }

  return {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    json: async () => JSON.parse(errorResponse),
  };
}

export default fakeFetch;
