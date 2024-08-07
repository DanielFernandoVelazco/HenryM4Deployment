import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1723002982664 implements MigrationInterface {
    name = 'Test1723002982664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cit" TO "city"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cit"`);
    }

}
