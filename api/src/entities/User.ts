import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Note } from './Note';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ length: 15 })
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Note, note => note.user)
    notes: Note[];

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;
}