import { join } from 'path';

// env config
export default {
  port: process.env.Port || 3000,
  saltingRounds: () =>
    process.env.SALTING_ROUNDS ? parseInt(process.env.SALTING_ROUNDS) : 10,
  environment: process.env.NODE_ENV,
  mongoConnectionString: process.env.MONGO_LOCAL_CONN_URL,
  useCasesBasePath:
    process.env.USE_CASES_BASE_PATH ||
    join(__dirname, '/../../Application/UseCases'),
};
