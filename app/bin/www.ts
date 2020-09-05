import * as dotenv from 'dotenv';
dotenv.config();

import { app } from '../Http/Bootstrap';

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(' App is running at http://localhost:%d', app.get('port'));
  console.log('  Press CTRL-C to stop\n');
});

export default server;
