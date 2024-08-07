import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Test1722993154643 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
