export declare class SignUpAuthDto {
    id: string;
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
    address: string;
    phone: number;
    country?: string;
    city?: string;
    constructor(partial: Partial<SignUpAuthDto>);
}
