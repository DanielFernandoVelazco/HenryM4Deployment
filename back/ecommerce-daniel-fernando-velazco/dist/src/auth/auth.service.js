"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(signInUser) {
        const user = await this.userService.findByEmail(signInUser.email);
        if (!user)
            throw new common_1.HttpException('User not found', 404);
        const passwordUser = await user.password;
        const passwordSignIn = await signInUser.password;
        const isPasswordMatch = passwordUser === passwordSignIn;
        if (!isPasswordMatch)
            throw new common_1.HttpException('Wrong credentials', 400);
        const token = await this.createToken(user);
        return { token };
    }
    async createToken(user) {
        const payload = {
            id: user.id,
            email: user.email,
        };
        return this.jwtService.signAsync(payload);
    }
    async signUp(signUpUser) {
        if (signUpUser.password !== signUpUser.passwordConfirm)
            throw new common_1.HttpException('Passwords do not match', 400);
        signUpUser.password = await (0, bcrypt_1.hash)(signUpUser.password, 10);
        return this.userService.create(signUpUser);
    }
    async create(createAuthDto) {
        return 'This action adds a new auth';
    }
    async findAll() {
        return `This action returns all auths`;
    }
    async findOne(id) {
        return `This action returns a #${id} auth`;
    }
    async update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    async remove(id) {
        return `This action removes a #${id} auth`;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map