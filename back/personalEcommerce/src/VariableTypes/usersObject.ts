/* eslint-disable prettier/prettier */
interface typeUserObject {
    id: number,
    email: string,
    name: string,
    password: string,
    address: string,
    phone: string,
    country: string | undefined,
    city: string | undefined,
}

export default typeUserObject