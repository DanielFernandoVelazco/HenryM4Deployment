/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
    imports: [ConfigModule, JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
            const secret = configService.get<string>('JWT_SECRET')
            if (!secret) {
                throw new Error('JWT_SECRET is not defined')
            }
            return {
                secret,
                signOptions: { expiresIn: '60m' },
            }
        }
    })
    ],
    exports: [JwtModule],
})
export class SharedModule { }
