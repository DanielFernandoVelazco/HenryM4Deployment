"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDto = void 0;
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
}
exports.UserResponseDto = UserResponseDto;
//# sourceMappingURL=response-users.dto.js.map