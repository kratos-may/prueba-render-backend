import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserIt1 } from './entities/user-it1.entity';
import { UserIt2 } from './entities/user-it2.entity';
import { UserIt3 } from './entities/user-it3.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserIt1, UserIt2, UserIt3])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
