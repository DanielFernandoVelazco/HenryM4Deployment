"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Third1729397209483 = void 0;
class Third1729397209483 {
    constructor() {
        this.name = 'Third1729397209483';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "city" TO "cityDay"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cityDay" TO "city"`);
    }
}
exports.Third1729397209483 = Third1729397209483;
//# sourceMappingURL=1729397209483-third.js.map