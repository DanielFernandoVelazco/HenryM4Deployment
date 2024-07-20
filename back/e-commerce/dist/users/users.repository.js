"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    constructor() {
        this.users = [
            {
                id: 1,
                email: 'a@a.com',
                name: 'User 1',
                password: '123456',
                address: 'Calle 1',
                phone: '123456789',
                country: 'Spain',
                city: 'Barcelona'
            },
            {
                id: 2,
                email: 'b@b.com',
                name: 'User 2',
                password: '123456',
                address: 'Calle 2',
                phone: '123456789',
                country: 'Spain',
                city: 'Barcelona'
            },
            {
                id: 3,
                email: 'c@c.com',
                name: 'User 3',
                password: '123456',
                address: 'Calle 3',
                phone: '123456789',
                country: 'Spain',
                city: 'Barcelona'
            }
        ];
    }
    finAll() {
        return this.users;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map