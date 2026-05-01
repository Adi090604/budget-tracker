import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsService {

  constructor(
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
    private categoriesService: CategoriesService,
  ) {}

  async create(data: any) {
    const categoryId = Number(data.categoryId);
    const category = this.categoriesService.findOne(categoryId);

    const transactionData = {
      ...data,
      categoryId: category.id,
      categoryName: category.name,
      categoryIcon: category.icon,
      categoryColor: category.color,
      category: category.name,
    };

    const transaction = this.transactionRepo.create(transactionData);
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