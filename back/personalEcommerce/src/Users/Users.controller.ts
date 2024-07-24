/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { UsersService } from "./Users.service";
import typeUserObject from "src/VariableTypes/usersObject";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(Number(id));
    }

    @Post()
    createUser(@Body() user: typeUserObject, @Req() req: any) {
        return this.usersService.createUser(user);
    }
}