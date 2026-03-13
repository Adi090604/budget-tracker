import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
      serveStaticOptions: {
        index: 'login.html', 
      },
    }),
    ServeStaticModule.forRoot({
  rootPath: join(__dirname, '..', 'uploads'),
  serveRoot: '/uploads',
}),
  
    // debug: inspect configuration at startup
    (() => {
      const cfg = {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'budget_tracker',
        autoLoadEntities: true,
        synchronize: true,
      };
      console.log('DEBUG TypeORM config:', cfg);
      return TypeOrmModule.forRoot(cfg as any);
    })(),

    UsersModule,
    TransactionsModule,
  ],
})
export class AppModule {}