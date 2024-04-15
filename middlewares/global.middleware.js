// This is a global middleware. It will run for every request.
// A te.js middleware will receive two arguments: ammo and next
// You can also use express middleware format by using a function that receives req, res and next

const globalMiddleware = (ammo, next) => {

  // req and res are available in ammo if you need
  const {req, res} = ammo;

  console.log('This is a global middleware. It will run for every request.');

  // Your code
  next();
};

export default globalMiddleware;
