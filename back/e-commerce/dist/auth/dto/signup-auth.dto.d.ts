export declare class SignUpAuthDto {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    address: string;
    phone: string;
    country?: string;
    city?: string;
    constructor(partial: Partial<SignUpAuthDto>);
}
