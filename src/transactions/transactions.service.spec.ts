import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction.entity';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let repo: {
    create: jest.Mock;
    save: jest.Mock;
    find: jest.Mock;
    delete: jest.Mock;
  };

  beforeEach(async () => {
    repo = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsService,
        {
          provide: getRepositoryToken(Transaction),
          useValue: repo,
        },
      ],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create and save a transaction', async () => {
    const data = {
      user_id: 1,
      amount: 100,
      category: 'Food',
      date: '2024-01-01',
      notes: 'Lunch',
    };

    const createdTransaction = { ...data };
    const savedTransaction = { id: 1, ...data };

    repo.create.mockReturnValue(createdTransaction);
    repo.save.mockResolvedValue(savedTransaction);

    const result = await service.create(data);

    expect(repo.create).toHaveBeenCalledWith(data);
    expect(repo.save).toHaveBeenCalledWith(createdTransaction);
    expect(result).toEqual(savedTransaction);
  });

  it('should return all transactions for a user', async () => {
    const userId = 1;
    const transactions = [
      { id: 1, user_id: 1, amount: 100, category: 'Food', date: '2024-01-01' },
      { id: 2, user_id: 1, amount: 50, category: 'Transport', date: '2024-01-02' },
    ];

    repo.find.mockResolvedValue(transactions);

    const result = await service.findAll(userId);

    expect(repo.find).toHaveBeenCalledWith({
      where: { user_id: userId },
    });
    expect(result).toEqual(transactions);
  });

  it('should delete a transaction by id', async () => {
    const deleteResult = { affected: 1 };

    repo.delete.mockResolvedValue(deleteResult);

    const result = await service.delete(1);

    expect(repo.delete).toHaveBeenCalledWith(1);
    expect(result).toEqual(deleteResult);
  });
});