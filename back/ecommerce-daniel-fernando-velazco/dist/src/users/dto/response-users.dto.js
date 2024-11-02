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
exports.UserResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class UserResponseDto {
    constructor(partial) {
        const { id, email, name, password, address, phone, country, city } = partial;
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.address = address;
        this.phone = phone;
        this.country = country;
        this.city = city;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, email: { required: true, type: () => String }, name: { required: true, type: () => String }, password: { required: true, type: () => String }, address: { required: true, type: () => String }, phone: { required: true, type: () => Number }, country: { required: false, type: () => String }, city: { required: false, type: () => String } };
    }
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The id of the user, asigned by the database',
        required: true
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The email of the user.',
        required: true
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The name of the user.',
        required: true
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The password of the user.',
        required: true
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The address of the user.',
        required: true
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The phone of the user.',
        required: true
    }),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The country of the user.',
        required: false
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The city of the user.',
        required: false
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "city", void 0);
//# sourceMappingURL=response-users.dto.js.map