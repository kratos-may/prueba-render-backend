import { Entity } from 'typeorm';
import { UserBase } from './user-base.entity';

@Entity({ name: 'users', schema: 'it1' })
export class UserIt1 extends UserBase { }
