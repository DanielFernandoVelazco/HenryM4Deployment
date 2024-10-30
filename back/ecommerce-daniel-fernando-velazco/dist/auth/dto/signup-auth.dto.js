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
exports.SignUpAuthDto = void 0;
const class_validator_1 = require("class-validator");
class SignUpAuthDto {
}
exports.SignUpAuthDto = SignUpAuthDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUUID)('4', { message: 'The userId must be a valid UUID.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The userId is required.' }),
    __metadata("design:type", String)
], SignUpAuthDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'The email must be in a valid format.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required.' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignUpAuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required.' }),
    (0, class_validator_1.MinLength)(3, { message: 'The name must be at least 3 characters.' }),
    (0, class_validator_1.MaxLength)(80, { message: 'The name must not exceed 80 characters.' }),
    __metadata("design:type", String)
], SignUpAuthDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, { message: 'The password must be at least 8 characters.' }),
    (0, class_validator_1.MaxLength)(15, { message: 'The password must not exceed 15 characters.' }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, {
        message: 'The password must contain at least one lowercase letter, one uppercase letter, one number and one special character (!@#$%^&*)'
    }),
    __metadata("design:type", String)
], SignUpAuthDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpAuthDto.prototype, "passwordConfirm", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Address is required.' }),
    (0, class_validator_1.MinLength)(3, { message: 'The address must be at least 3 characters.' }),
    (0, class_validator_1.MaxLength)(80, { message: 'The address must not exceed 80 characters.' }),
    __metadata("design:type", String)
], SignUpAuthDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'The phone number must be a valid number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone number is required.' }),
    __metadata("design:type", Number)
], SignUpAuthDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(5, { message: 'The country must be at least 5 characters.' }),
    (0, class_validator_1.MaxLength)(20, { message: 'The country must not exceed 20 characters.' }),
    __metadata("design:type", String)
], SignUpAuthDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(5, { message: 'The city must be at least 5 characters.' }),
    (0, class_validator_1.MaxLength)(20, { message: 'The city must not exceed 20 characters.' }),
    __metadata("design:type", String)
], SignUpAuthDto.prototype, "city", void 0);
//# sourceMappingURL=signup-auth.dto.js.map