import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
    private users = [

        {
            id: 1,
            email: 'a@a.com',
            name: 'User1',
            password: 'password1',
            address: 'address1',
            phone: 'phone1',
            country: 'country1',
            city: 'city1',
        },
        {
            id: 2,
            email: 'b@b.com',
            name: 'User2',
            password: 'password2',
            address: 'address2',
            phone: 'phone2',
            country: 'country2',
            city: 'city2',
        },
        {
            id: 3,
            email: 'c@c.com',
            name: 'User3',
            password: 'password3',
            address: 'address3',
            phone: 'phone3',
            country: 'country3',
            city: 'city3',
        },
        {
            id: 4,
            email: 'd@d.com',
            name: 'User4',
            password: 'password4',
            address: 'address4',
            phone: 'phone4',
            country: 'country4',
            city: 'city4',
        }
    ]

    findAll() {
        return this.users;
    }
}