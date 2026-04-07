import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Transactions API (Integration)', () => {
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
  // POST /transactions
  // ============================
  it('should create a transaction', async () => {
    const data = {
      user_id: 1,
      amount: 100,
      category: 'Food',
      date: '2024-01-01',
    };

    const res = await request(app.getHttpServer())
      .post('/transactions')
      .send(data)
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.amount).toBe(100);
  });

  it('should create a transaction with receipt', async () => {
    const res = await request(app.getHttpServer())
      .post('/transactions')
      .field('user_id', '1')
      .field('amount', '50')
      .field('category', 'Transport')
      .field('date', '2024-01-02')
      .attach('receipt', Buffer.from('test'), 'test.jpg')
      .expect(201);

    expect(res.body.receipt).toBeDefined();
  });

  // ============================
  // GET /transactions/user/:id
  // ============================
  it('should return transactions for a user', async () => {
    const res = await request(app.getHttpServer())
      .get('/transactions/user/1')
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return empty array if no transactions', async () => {
    const res = await request(app.getHttpServer())
      .get('/transactions/user/9999')
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  // ============================
  // DELETE /transactions/:id
  // ============================
  it('should delete a transaction', async () => {
    const createRes = await request(app.getHttpServer())
      .post('/transactions')
      .send({
        user_id: 1,
        amount: 20,
        category: 'Food',
        date: '2024-01-03',
      });

    const id = createRes.body.id;

    const res = await request(app.getHttpServer())
      .delete(`/transactions/${id}`)
      .expect(200);

    expect(res.body.affected).toBe(1);
  });

  it('should handle deleting non-existent transaction', async () => {
    const res = await request(app.getHttpServer())
      .delete('/transactions/99999')
      .expect(200);

    expect(res.body.affected).toBe(0);
  });
});