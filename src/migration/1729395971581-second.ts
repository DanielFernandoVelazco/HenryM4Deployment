import { MigrationInterface, QueryRunner } from "typeorm";

export class Second1729395971581 implements MigrationInterface {
    name = 'Second1729395971581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cityZone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cityZone" TO "city"`);
    }

}
