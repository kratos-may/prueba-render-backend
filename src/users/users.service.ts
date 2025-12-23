import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserIt1 } from './entities/user-it1.entity';
import { UserIt2 } from './entities/user-it2.entity';
import { UserIt3 } from './entities/user-it3.entity';
import { UserBase } from './entities/user-base.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserIt1)
        private usersIt1Repository: Repository<UserIt1>,
        @InjectRepository(UserIt2)
        private usersIt2Repository: Repository<UserIt2>,
        @InjectRepository(UserIt3)
        private usersIt3Repository: Repository<UserIt3>,
    ) { }

    async create(createUserDto: { name: string; surname: string; installation: string }) {
        const { name, surname, installation } = createUserDto;
        let repository: Repository<UserBase>;
        let entity: UserBase;

        switch (installation) {
            case 'it1':
                repository = this.usersIt1Repository;
                entity = new UserIt1();
                break;
            case 'it2':
                repository = this.usersIt2Repository;
                entity = new UserIt2();
                break;
            case 'it3':
                repository = this.usersIt3Repository;
                entity = new UserIt3();
                break;
            default:
                throw new Error('Invalid installation');
        }

        entity.name = name;
        entity.surname = surname;

        return repository.save(entity);
    }
}
