import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const updateUserSchema = z
  .object({
    firstName: z.string({
      required_error: 'firstName is required',
      invalid_type_error: 'firstName should be string',
    }),
    lastName: z.string({
      required_error: 'lastName is required',
      invalid_type_error: 'lastName should be string',
    }),
    email: z
      .string({
        required_error: 'email is required',
        invalid_type_error: 'email should be valid',
      })
      .email(),
    mobile: z
      .string({
        required_error: 'mobile is required',
        invalid_type_error: 'mobile should be 10 digit',
      })
      .regex(/^[6798]/, 'mobile should start with either 6, 7, 8 or 9')
      .length(10, 'mobile should have exactly 10 digits'),
    birthday: z
      .string({
        invalid_type_error: 'birthday should be a date',
      })
      .optional()
      .or(z.null()),
  })
  .required();

export class UpdateUserDto {
  @ApiProperty({ example: 'Aakash' })
  firstName: string;

  @ApiProperty({ example: 'Gajjar' })
  lastName: string;

  @ApiProperty({ example: 'sky@aakashgajjar.dev' })
  email: string;

  @ApiProperty({ example: '9924728291' })
  mobile: string;

  @ApiProperty({ example: '2002-09-23' })
  birthday: string;
}
