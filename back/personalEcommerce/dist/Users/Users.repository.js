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
                email: '6tVHh@example.com',
                name: 'John',
                password: '1234',
                address: 'Rue de la paix 1',
                phone: '0606060606',
                country: 'France',
                city: 'Paris'
            },
            {
                id: 2,
                email: '6tVHh@example.com',
                name: 'Jane',
                password: '1234',
                address: 'Rue de la paix 1',
                phone: '0606060606',
                country: 'France',
                city: 'Paris'
            },
            {
                id: 3,
                email: '6tVHh@example.com',
                name: 'Jack',
                password: '1234',
                address: 'Rue de la paix 1',
                phone: '0606060606',
                country: 'France',
                city: 'Paris'
            }
        ];
    }
    async getUsers() {
        return this.users;
    }
    async getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    async createUser(user) {
        const id = this.users.length + 1;
        this.users = [...this.users, { id, ...user }];
        return { id, ...user };
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=Users.repository.js.map