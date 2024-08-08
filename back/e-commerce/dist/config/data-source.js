"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDataSource = exports.PostgresDataSourceConfig = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const config_1 = require("@nestjs/config");
dotenv.config({
    path: '.env.development.local'
});
const PostgresDataSourceOptions = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
};
exports.PostgresDataSourceConfig = (0, config_1.registerAs)('postgres', () => PostgresDataSourceOptions);
exports.PostgresDataSource = new typeorm_1.DataSource(PostgresDataSourceOptions);
//# sourceMappingURL=data-source.js.map