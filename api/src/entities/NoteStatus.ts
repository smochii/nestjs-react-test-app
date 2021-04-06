import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Note } from './Note';

@Entity()
export class NoteStatus {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    readonly name: string;

    @OneToMany(() => Note, note => note.user)
    notes: Note[];
}