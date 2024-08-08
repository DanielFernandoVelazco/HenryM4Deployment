/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { registerAs } from '@nestjs/config';

dotenv.config(
    {
        path: '.env.development.local'
    }
);

const PostgresDataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    //dropSchema: true,
}

export const PostgresDataSourceConfig = registerAs('postgres', () => PostgresDataSourceOptions)

export const PostgresDataSource = new DataSource(PostgresDataSourceOptions)