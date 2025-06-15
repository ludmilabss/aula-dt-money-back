import { TransactionType } from '@prisma/client';
import { IsEnum, IsString, MinLength, IsNumber, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateTransactionDto {
  @IsString({ message: 'Title must be a string' })
  @MinLength(5, { message: 'Title must be at least 5 characters long' })
  @IsNotEmpty({ message: 'Title cannot be empty' }) 
  title: string;

  @IsString({ message: 'Category must be a string' }) 
  @IsNotEmpty({ message: 'Category cannot be empty' }) 
  category: string;

  @IsDateString({}, { message: 'Data must be a valid date string (YYYY-MM-DD)' }) 
  @IsNotEmpty({ message: 'Data cannot be empty' }) 
  data: string; 

  @IsNumber({}, { message: 'Price must be a number' }) 
  @IsNotEmpty({ message: 'Price cannot be empty' }) 
  price: number;

  @IsEnum(TransactionType, { message: 'Type must be INCOME or OUTCOME' }) 
  @IsNotEmpty({ message: 'Type cannot be empty' }) 
  type: TransactionType;
}