import { MigrationInterface, QueryRunner } from "typeorm";

export class First1729395203820 implements MigrationInterface {
    name = 'First1729395203820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cities"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cities" TO "city"`);
    }

}
