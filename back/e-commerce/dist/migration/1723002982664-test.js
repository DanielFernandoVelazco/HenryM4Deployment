"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1723002982664 = void 0;
class Test1723002982664 {
    constructor() {
        this.name = 'Test1723002982664';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cit" TO "city"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cit"`);
    }
}
exports.Test1723002982664 = Test1723002982664;
//# sourceMappingURL=1723002982664-test.js.map