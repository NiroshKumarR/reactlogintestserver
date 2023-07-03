import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import LoginModel from './login.model';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService, LoginModel],
})
export class LoginModule {}
