/* eslint-disable prettier/prettier */
export class UserResponseDto {
    name: string;
    email: string;
    address: string;
    phone: string;
    country?: string;
    city?: string;
    user: string;

    constructor(partial: Partial<UserResponseDto>) {
        const { name, email, address, phone, country, city, user } = partial;

        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.user = user;
    }
}