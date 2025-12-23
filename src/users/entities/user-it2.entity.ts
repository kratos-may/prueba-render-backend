import { Entity } from 'typeorm';
import { UserBase } from './user-base.entity';

@Entity({ name: 'users', schema: 'it2' })
export class UserIt2 extends UserBase { }
