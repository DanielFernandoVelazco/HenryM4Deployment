import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";
import { registerAs } from "@nestjs/config";

dotenv.config({
    path: '.env.development.local',
});

const postgresDataSource: DataSourceOptions = {

    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
};

export const postgresDataSourceConfig = registerAs('postgres', () => postgresDataSource)