"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_module_1 = require("./products/products.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const orders_module_1 = require("./orders/orders.module");
const order_details_module_1 = require("./order-details/order-details.module");
const categories_module_1 = require("./categories/categories.module");
const config_1 = require("@nestjs/config");
const data_source_1 = require("./config/data-source");
const typeorm_1 = require("@nestjs/typeorm");
const seeds_module_1 = require("./seeds/seeds.module");
const cloudinary_service_1 = require("./service/cloudinary/cloudinary.service");
const file_upload_module_1 = require("./file-upload/file-upload.module");
const shared_module_1 = require("./shared/shared.module");
const typeorm_testing_config_1 = require("../test/typeorm-testing-config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env.development.local', '.env'],
                isGlobal: true,
                load: [data_source_1.postgresDataSourceConfig, typeorm_testing_config_1.sqliteDataSourceConfig,
                    () => ({
                        enviroment: process.env.enviroment || 'TEST'
                    })
                ],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (ConfigService) => ConfigService.get('postgres'),
            }),
            products_module_1.ProductsModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            orders_module_1.OrdersModule,
            order_details_module_1.OrderDetailsModule,
            categories_module_1.CategoriesModule,
            seeds_module_1.SeedModule,
            file_upload_module_1.FileUploadModule,
            shared_module_1.SharedModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, cloudinary_service_1.CloudinaryService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map