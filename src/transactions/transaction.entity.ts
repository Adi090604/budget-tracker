import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transactions')
export class Transaction {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_id!: number;

  @Column()
  amount!: number;

  @Column()
  category!: string;

  @Column({ nullable: true })
  categoryId!: number;

  @Column({ nullable: true })
  categoryName!: string;

  @Column({ nullable: true })
  categoryIcon!: string;

  @Column({ nullable: true })
  categoryColor!: string;

  @Column()
  date!: string;

  @Column({ nullable: true })
  notes!: string;

  @Column({ nullable: true })
  receipt!: string;

}