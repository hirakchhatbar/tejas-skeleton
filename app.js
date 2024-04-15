import Tejas from 'te.js';
import cors from 'cors';

import globalMiddleware from './middlewares/global.middleware.js';

const tejas = new Tejas();

// To add global middlewares, use tejas.midair()
tejas.midair(cors(), globalMiddleware);

tejas.takeoff();
