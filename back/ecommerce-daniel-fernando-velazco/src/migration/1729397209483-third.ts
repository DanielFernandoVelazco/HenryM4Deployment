import { MigrationInterface, QueryRunner } from "typeorm";

export class Third1729397209483 implements MigrationInterface {
    name = 'Third1729397209483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cityDay"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cityDay" TO "city"`);
    }

}
