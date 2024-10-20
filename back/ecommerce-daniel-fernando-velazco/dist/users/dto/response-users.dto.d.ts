export declare class UserResponseDto {
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    country?: string;
    city?: string;
    constructor(partial: Partial<UserResponseDto>);
}
