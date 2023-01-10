import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MainPrismaService } from 'src/database/MainPrismaService';

@Module({
  controllers: [UserController],
  providers: [UserService, MainPrismaService]
})
export class UserModule {}
