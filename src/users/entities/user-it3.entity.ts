import { Entity } from 'typeorm';
import { UserBase } from './user-base.entity';

@Entity({ name: 'users', schema: 'it3' })
export class UserIt3 extends UserBase { }
