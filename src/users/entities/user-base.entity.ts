import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class UserBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;
}
