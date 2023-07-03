import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './datasource/prisma/prisma.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [LoginModule, PrismaModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
