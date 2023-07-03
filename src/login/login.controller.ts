import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private service: LoginService) {}

  @Post()
  public async loginUser(@Body('data') data: any) {
    // task write body dto
    return await this.service.loginService(data);
  }
}
