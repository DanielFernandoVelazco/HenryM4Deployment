import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";


export const typeOrmTestConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: ':memory:',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
}

export const typeOrmTestModule = TypeOrmModule.forRoot(typeOrmTestConfig)
export const sqliteDataSourceConfig = registerAs(
    'sqlite',
    () => typeOrmTestConfig
)