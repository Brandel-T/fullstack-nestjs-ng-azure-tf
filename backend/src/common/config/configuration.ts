// export const config = () => ({
//   port: parseInt(process.env.PORT || '3000', 10),
//   nodeEnv: process.env.NODE_ENV,
//   postgres: {
//     host: process.env.POSTGRES_HOST,
//     port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
//     username: process.env.POSTGRES_USER,
//     database: process.env.POSTGRES_DB,
//     password: process.env.POSTGRES_PASSWORD,
//   },
// });

import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNotEmpty()
  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  @IsString()
  NODE_ENV: string;

  @IsNotEmpty()
  @IsString()
  POSTGRES_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  POSTGRES_USER: string;

  @IsNotEmpty()
  @IsString()
  POSTGRES_DB: string;

  @IsNotEmpty()
  @IsNumber()
  POSTGRES_PORT: number;

  @IsNotEmpty()
  @IsString()
  POSTGRES_HOST: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
