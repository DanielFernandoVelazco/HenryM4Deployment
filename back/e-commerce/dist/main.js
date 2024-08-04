"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middleware/logger.middleware");
require("reflect-metadata");
const categories_seed_1 = require("./seeds/categories/categories.seed");
const products_seed_1 = require("./seeds/products/products.seed");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(logger_middleware_1.loggerGlobal);
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