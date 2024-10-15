export declare class UserResponseDto {
    id: number;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country?: string;
    city?: string;
    constructor(partial: Partial<UserResponseDto>);
}
