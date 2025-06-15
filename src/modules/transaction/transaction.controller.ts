import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express'; 
import { TransactionsService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transactions') 
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  /**
   * @param createTransactionDto 
   * @param res 
   * @returns
   */
  @Post()
  @HttpCode(HttpStatus.CREATED) 
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  /**
   * @returns 
   */
  @Get()
  @HttpCode(HttpStatus.OK) 
  async findAll() {
    return this.transactionsService.findAll();
  }

  /**
   * @param id 
   * @returns 
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK) 
  async findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(id);
  }

  /**
   * @param id 
   * @param updateTransactionDto 
   * @returns 
   */
  @Patch(':id')
  @HttpCode(HttpStatus.OK) 
  async update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionsService.update(id, updateTransactionDto);
  }

  /**
   * @param id 
   * @param res 
   * @returns 
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) 
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.transactionsService.remove(id);
    res.send();
  }
}