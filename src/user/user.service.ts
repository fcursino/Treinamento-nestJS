import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MainPrismaService } from 'src/database/MainPrismaService';

@Injectable()
export class UserService {
  constructor(private db: MainPrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = await this.db.untitled_table.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password
      }
    })
    return createUser;
  }

  async findAll() {
    const listUsers = await this.db.untitled_table.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true
      }
    })
    return listUsers
  }

  async findOne(id: number) {
    const findOneUser = await this.db.untitled_table.findFirst({
      where: {
        id: id
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true
      }
    })
    return findOneUser
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await this.db.untitled_table.update({
      where: {
        id: id
      },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password
      }
    })
    return updateUser
  }

  async remove(id: number) {
    const deleteUser = await this.db.untitled_table.delete({
      where: {
        id: id
      }
    })
    return {
      message:'Usuário deletado',
      deleteUser
    }
  }
}
