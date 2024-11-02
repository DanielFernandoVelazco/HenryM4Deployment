"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqliteDataSourceConfig = exports.typeOrmTestModule = exports.typeOrmTestConfig = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
exports.typeOrmTestConfig = {
    type: 'sqlite',
    database: ':memory:',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
};
exports.typeOrmTestModule = typeorm_1.TypeOrmModule.forRoot(exports.typeOrmTestConfig);
exports.sqliteDataSourceConfig = (0, config_1.registerAs)('sqlite', () => exports.typeOrmTestConfig);
//# sourceMappingURL=typeorm-testing-config.js.map