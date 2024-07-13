/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { AuthsService } from "./Auth.service";


@Controller('auths')
export class AuthsController {
    constructor(private readonly authsService: AuthsService) { }

    @Get()
    getUsers() {
        return this.authsService.getAuths();
    }
}