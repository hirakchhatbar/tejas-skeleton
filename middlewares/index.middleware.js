// A te.js middleware will receive two arguments: ammo and next
// You can also use express middleware format by using a function that receives req, res and next

const indexTargetMiddleware = (ammo, next) => {

  // req and res are available in ammo if you need
  const {req, res} = ammo;

  console.log('This is middleware called for all index routes.');

  // Your code
  next();
};

export default indexTargetMiddleware;
