import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { NoteStatus } from './NoteStatus';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ length: 64 })
    title: string;

    @Column({ length: 10000 })
    content: string;
    
    @ManyToOne(() => User, user => user.notes)
    user: User;

    @ManyToOne(() => NoteStatus, noteStatus => noteStatus.notes)
    noteStatus: NoteStatus;

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;
}