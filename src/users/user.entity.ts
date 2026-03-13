import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
avatar: string;

}