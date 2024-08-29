/* eslint-disable prettier/prettier */
import { INestApplication } from "@nestjs/common"
import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppModule } from "src/app.module";
import { User } from "src/users/entities/user.entity";
import { hash } from 'bcryptjs';
import { UsersService } from "src/users/users.service";
import * as request from "supertest";
import { UserResponseDto } from "src/users/dto/response-user.dto";

describe('User (e2e)', () => {
    let app: INestApplication;
    let authToken: string;
    let userService: UsersService;

    beforeEach(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule, TypeOrmModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.init();

        userService = moduleFixture.get<UsersService>(UsersService);
        const hashedPassword = await hash('123456', 10);
        jest.spyOn(userService, 'findByEmail').mockImplementation(async (email) => {
            if (email === 'johndou@gmail.com') {
                return Promise.resolve({
                    email: 'johndou@gmail.com',
                    password: hashedPassword,
                    administrator: 'user',
                } as User);
            } else {
                return Promise.resolve(undefined);
            }
        })

        jest.spyOn(userService, 'findAll').mockImplementation(async () => {
            return Promise.resolve([
                {
                    name: 'John Doe',
                    email: 'johndou@gmail.com',
                    address: 'Some Address',
                    phone: '1234567890',
                    country: 'Some Country',
                    city: 'Some City',
                }
            ] as UserResponseDto[]);
        });

        const loginResponse = await request(app.getHttpServer()).post('/auth/signin').send({
            email: 'johndou@gmail.com',
            password: '123456',
        })

        authToken = loginResponse.body['token'];
    })

    afterEach(async () => {
        await app.close();
    })

    it('/users (GET) return array with users and ok status', async () => {
        const req = await request(app.getHttpServer())
            .get('/users')
            .set('Authorization', `Bearer ${authToken}`)

        expect(req.status).toBe(200);
        expect(req.body).toBeInstanceOf(Array);
    })
})