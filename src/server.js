import dotenv from 'dotenv'
import { checkDotEnv } from './utils/checkDotEnv'
import io from 'socket.io'
import redisAdapter from 'socket.io-redis'
dotenv.config()

checkDotEnv(process.env)

const {PORT, REDIS_HOST, REDIS_PORT} = process.env
const ioServer = io(PORT)
ioServer.adapter(redisAdapter({ host: REDIS_HOST, port: REDIS_PORT }));
