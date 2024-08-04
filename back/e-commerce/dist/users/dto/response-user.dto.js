"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDto = void 0;
class UserResponseDto {
    constructor(partial) {
        const { name, email, address, phone, country, city } = partial;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.country = country;
        this.city = city;
    }
}
exports.UserResponseDto = UserResponseDto;
//# sourceMappingURL=response-user.dto.js.map