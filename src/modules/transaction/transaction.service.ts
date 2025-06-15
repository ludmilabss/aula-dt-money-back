import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from '@prisma/client'; 

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  /**
   * @param createTransactionDto 
   * @returns 
   */
  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: {
        ...createTransactionDto,
        data: new Date(createTransactionDto.data),
      },
    });
  }

  /**
   * @returns 
   */
  async findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }

  /**
   * @param id 
   * @returns 
   */
  async findOne(id: string): Promise<Transaction> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with ID "${id}" not found.`);
    }
    return transaction;
  }

  /**
   * @param id 
   * @param updateTransactionDto 
   * @returns 
   */
  async update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    await this.findOne(id);

    return this.prisma.transaction.update({
      where: { id },
      data: {
        ...updateTransactionDto,
        ...(updateTransactionDto.data && { data: new Date(updateTransactionDto.data) }),
      },
    });
  }

  /**
   * @param id 
   */
  async remove(id: string): Promise<void> {
    await this.findOne(id);

    await this.prisma.transaction.delete({
      where: { id },
    });
  }
}