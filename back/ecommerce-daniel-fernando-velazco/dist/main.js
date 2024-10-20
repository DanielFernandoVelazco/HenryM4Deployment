"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middleware/logger/logger.middleware");
const categories_seeds_1 = require("./seeds/categories/categories.seeds");
const products_seeds_1 = require("./seeds/products/products.seeds");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(logger_middleware_1.globalLogger);
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