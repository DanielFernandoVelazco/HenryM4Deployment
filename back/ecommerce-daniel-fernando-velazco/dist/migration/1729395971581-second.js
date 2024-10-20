"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Second1729395971581 = void 0;
class Second1729395971581 {
    constructor() {
        this.name = 'Second1729395971581';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cityZone"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cityZone" TO "city"`);
    }
}
exports.Second1729395971581 = Second1729395971581;
//# sourceMappingURL=1729395971581-second.js.map