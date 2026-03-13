import { IsEmail, IsString, MinLength } from 'class-validator';

export interface CreateUserInput {
  email: string;
  password: string;
}

/**
 * Class-validator DTO usable in NestJS.
 * Frontend can import the interface for type safety.
 */
export class CreateUserDto implements CreateUserInput {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;
}
