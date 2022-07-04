import { Controller, Get, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get('get')
  async checkDuplicateEmail() {
    //const response = await this.userService.checkDuplicateEmail(email);
    return { id: 'hello backend!!' };
  }

}
