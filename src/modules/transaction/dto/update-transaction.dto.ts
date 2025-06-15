import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';
import { IsDateString, IsOptional } from 'class-validator'; 

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  @IsOptional()
  @IsDateString({}, { message: 'Data must be a valid date string (YYYY-MM-DD)' })
  data?: string; 
}