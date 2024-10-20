"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresDataSourceConfig = void 0;
const dotenv = require("dotenv");
const config_1 = require("@nestjs/config");
dotenv.config({
    path: '.env.development.local',
});
const postgresDataSource = {
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
exports.postgresDataSourceConfig = (0, config_1.registerAs)('postgres', () => postgresDataSource);
//# sourceMappingURL=data-source.js.map