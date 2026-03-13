import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transactions')
export class Transaction {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  amount: number;

  @Column()
  category: string;

  @Column()
  date: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  receipt: string;

}