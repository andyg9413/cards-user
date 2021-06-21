import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  linkedIn?: string;
}
