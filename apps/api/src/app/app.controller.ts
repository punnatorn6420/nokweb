import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'shared-dtos';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('users')
  createUser(@Body() body: CreateUserDto) {
    return {
      ok: true,
      user: {
        email: body.email,
      },
    };
  }
}
