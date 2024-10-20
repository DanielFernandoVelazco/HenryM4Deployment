"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.First1729395203820 = void 0;
class First1729395203820 {
    constructor() {
        this.name = 'First1729395203820';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cities"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cities" TO "city"`);
    }
}
exports.First1729395203820 = First1729395203820;
//# sourceMappingURL=1729395203820-first.js.map