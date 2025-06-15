import { Module } from '@nestjs/common';
import { TransactionsService } from './transaction.service';
import { TransactionsController } from './transaction.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [PrismaModule],
})
export class TransactionModule {}
