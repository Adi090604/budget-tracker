import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsService {

  constructor(
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
  ) {}

  create(data: any) {
    const transaction = this.transactionRepo.create(data);
    return this.transactionRepo.save(transaction);
  }

  findAll(user_id: number) {
    return this.transactionRepo.find({
      where: { user_id: user_id }
    });
  }

  delete(id: number) {
    return this.transactionRepo.delete(id);
  }

}