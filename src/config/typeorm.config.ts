import {TypeOrmModuleOptions} from '@nestjs/typeorm';

const TYPEORM_HOST = process.env.DB_HOST;
const TYPEORM_USERNAME = process.env.DB_USERNAME;
const TYPEORM_PASSWORD = process.env.DB_PASSWORD;
const TYPEORM_DATABASE = process.env.DB_NAME;
const TYPEORM_PORT = 5432;
const TYPEORM_SYNCHRONIZE = process.env.DB_SYNCHRONIZE;

export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'postgres',
    host: TYPEORM_HOST,
    port: TYPEORM_PORT,
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
}