import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MainPrismaService } from './database/MainPrismaService';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [MainPrismaService],
})
export class AppModule {}
