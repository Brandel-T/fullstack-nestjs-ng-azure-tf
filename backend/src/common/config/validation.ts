import * as Joi from 'joi';

export const validation = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .default('development'),
  PORT: Joi.number().port().default(3000),
  POSTGRES_PASSWORD: Joi.string().default('root'),
  POSTGRES_USER: Joi.string().default('root'),
  POSTGRES_DB: Joi.string().default('todo_dev'),
  POSTGRES_PORT: Joi.number().port().default(5432),
  POSTGRES_HOST: Joi.string().hostname().default('localhost'),
});
