export declare class UserResponseDto {
    name: string;
    email: string;
    address: string;
    phone: string;
    country?: string;
    city?: string;
    user: string;
    constructor(partial: Partial<UserResponseDto>);
}
