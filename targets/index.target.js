import {Target} from 'te.js';
import indexTargetMiddleware from '../middlewares/index.middleware.js';

// To pass a middleware to all endpoints in this target, use target.midair()
// Express middlewares are also supported
const target = new Target();
target.midair(indexTargetMiddleware);

// General endpoint supporting any method
target.register('/hello', (ammo) => {

  // Regardless of method, all your query parameters and request data is available in ammo.payload
  const payload = ammo.payload;

  //ammo.fire could be a text message, a json object or a status code
  ammo.fire('Hello, World!');
});


// Endpoint for GET requests
target.register('/hello-get', (ammo) => {
  if (!ammo.GET) return ammo.notAllowed();

  ammo.fire({
    status: 200,
    body: 'Hello, World! (GET)',
  });
});


// Endpoint for POST requests
target.register('/hello-post', (ammo) => {
  if (!ammo.POST) return ammo.notAllowed();

  ammo.fire({
    status: 200,
    body: 'Hello, World! (POST)',
  });
});


// Throw an error
target.register('/error', (ammo) => {
  throw new Error('An error occurred');
});
