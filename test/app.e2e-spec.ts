import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Budget Tracker E2E', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // ============================
  // E2E FLOW: Add Transaction
  // ============================
  it('should add a transaction and return it', async () => {
    const res = await request(app.getHttpServer())
      .post('/transactions')
      .send({
        user_id: 1,
        amount: 120,
        category: 'Food',
        date: '2024-01-10',
      })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.amount).toBe(120);
  });

  // ============================
  // E2E FLOW: View Transactions
  // ============================
  it('should retrieve transactions for a user', async () => {
    const res = await request(app.getHttpServer())
      .get('/transactions/user/1')
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  // ============================
  // E2E FLOW: Delete Transaction
  // ============================
  it('should create then delete a transaction', async () => {
    const create = await request(app.getHttpServer())
      .post('/transactions')
      .send({
        user_id: 1,
        amount: 60,
        category: 'Transport',
        date: '2024-01-11',
      });

    const id = create.body.id;

    const res = await request(app.getHttpServer())
      .delete(`/transactions/${id}`)
      .expect(200);

    expect(res.body.affected).toBe(1);
  });
});