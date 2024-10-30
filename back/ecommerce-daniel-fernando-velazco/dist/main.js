"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middleware/logger/logger.middleware");
const categories_seeds_1 = require("./seeds/categories/categories.seeds");
const products_seeds_1 = require("./seeds/products/products.seeds");
const common_1 = require("@nestjs/common");
const express_openid_connect_1 = require("express-openid-connect");
const auth0_config_1 = require("./config/auth0-config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(logger_middleware_1.globalLogger);
    app.use((0, express_openid_connect_1.auth)({ ...auth0_config_1.auth0Config }));
    const categoriesSeed = app.get(categories_seeds_1.CategoriesSeed);
    await categoriesSeed.seed();
    console.log('*** LA INSERCION DE CATEGORIAS FUE EXITOSA ***');
    const productsSeed = app.get(products_seeds_1.ProductsSeed);
    await productsSeed.seed();
    console.log('*** LA INSERCION DE PRODUCTOS FUE EXITOSA ***');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map