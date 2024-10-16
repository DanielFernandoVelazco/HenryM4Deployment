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
                name: 'User1',
                password: 'password1',
                address: 'address1',
                phone: 'phone1',
                country: 'country1',
                city: 'city1',
            },
            {
                id: 2,
                email: 'b@b.com',
                name: 'User2',
                password: 'password2',
                address: 'address2',
                phone: 'phone2',
                country: 'country2',
                city: 'city2',
            },
            {
                id: 3,
                email: 'c@c.com',
                name: 'User3',
                password: 'password3',
                address: 'address3',
                phone: 'phone3',
                country: 'country3',
                city: 'city3',
            },
            {
                id: 4,
                email: 'd@d.com',
                name: 'User4',
                password: 'password4',
                address: 'address4',
                phone: 'phone4',
                country: 'country4',
                city: 'city4',
            }
        ];
        this.arrayUsers = this.users.map(({ password, ...user }) => user);
    }
    create(createUser) {
        const id = this.arrayUsers.length + 1;
        const userAdd = { id, ...createUser };
        this.arrayUsers = [...this.arrayUsers, userAdd];
        return userAdd;
    }
    findAll({ page, limit }) {
        return this.arrayUsers.slice(page, limit);
    }
    findOne(id) {
        return this.arrayUsers.find((user) => user.id === id);
    }
    update(id, updateUser) {
        const user = this.findOne(id);
        const upUser = { ...user, ...updateUser };
        this.arrayUsers = this.arrayUsers.map((user) => (user.id === id ? upUser : user));
        return upUser;
    }
    remove(id) {
        this.arrayUsers = this.arrayUsers.filter((user) => user.id !== id);
        return id;
    }
    findOneByEmail(email) {
        return this.users.find((user) => user.email === email);
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map