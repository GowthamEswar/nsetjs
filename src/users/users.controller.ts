import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { userDto, loginDTO } from './dto/user.dto';
import { UsersService } from './users.service'
import { User } from './interface/user.iterface'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.finadAll();
    }

    @Post()
    create(@Body() createUser: userDto): Promise<User> {
        return this.userService.create(createUser);
    }

    @Post('login')
    login(@Body() loginUser: loginDTO) {
        return this.userService.login(loginUser)
    }
}
