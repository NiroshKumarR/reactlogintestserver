import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class LoginModel {
  constructor(@Inject('PrismaInit') private prisma: PrismaClient) {}

  public async loginUser(data: any) {
    // Get dynamic body data;
    return await this.prisma.user.create({
      data: {
        username: 'nirosh',
        password: 'nirosh',
        status: 'admin',
      },
    });
  }
}
