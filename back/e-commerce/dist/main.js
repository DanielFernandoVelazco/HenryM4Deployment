"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middleware/logger.middleware");
require("reflect-metadata");
const categories_seed_1 = require("./seeds/categories/categories.seed");
const products_seed_1 = require("./seeds/products/products.seed");
const validation_pipe_1 = require("./pipes-validation/validation.pipe");
const express_openid_connect_1 = require("express-openid-connect");
const auth0_config_1 = require("./config/auth0.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.use(logger_middleware_1.loggerGlobal);
    app.use((0, express_openid_connect_1.auth)({
        ...auth0_config_1.auth0Config
    }));
    const categoriesSeed = app.get(categories_seed_1.CategoriesSeed);
    await categoriesSeed.seed();
    console.log('La inserción de categorias fue exitosa');
    const productsSeed = app.get(products_seed_1.ProductsSeed);
    await productsSeed.seed();
    console.log('La inserción de productos fue exitosa');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map