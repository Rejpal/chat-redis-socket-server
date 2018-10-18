
type DotEnv = {
  PORT: number,
  REDIS_HOST: string,
  REDIS_PORT: number
}

export function checkDotEnv (envVariables: DotEnv) {
  const { PORT, REDIS_HOST, REDIS_PORT } = envVariables
  if (!PORT) {
    throw new Error('PORT is not defined in .env')
  } else if (!REDIS_HOST) {
    throw new Error('REDIS_HOST is not defined in .env')
  } else if (!REDIS_PORT) {
    throw new Error('REDIS_PORT is not defined in .env')
  } else {
    console.info('.env is defined correctly.', PORT, REDIS_HOST, REDIS_PORT)
  }
}
