import { Injectable } from '@nestjs/common';
import LoginModel from './login.model';

@Injectable()
export class LoginService {
  constructor(private loginModel: LoginModel) {}

  public async loginService(data: any) {
    // if data key not values empty or null or undefied

    return await this.loginModel.loginUser(data);
  }
}
