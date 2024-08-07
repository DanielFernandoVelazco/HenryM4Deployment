"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1722993154643 = void 0;
class Test1722993154643 {
    constructor() {
        this.name = 'Test1722993154643';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cit"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cit" TO "city"`);
    }
}
exports.Test1722993154643 = Test1722993154643;
//# sourceMappingURL=1722993154643-test.js.map