import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const createAddressSchema = z
  .object({
    line1: z.string({
      required_error: 'line1 is required',
      invalid_type_error: 'firstName should be string',
    }),
    line2: z
      .string({
        required_error: 'line2 is required',
        invalid_type_error: 'lastName should be string',
      })
      .optional()
      .or(z.null()),
    pincode: z
      .string({
        required_error: 'pincode is required',
        invalid_type_error: 'pincode should be valid',
      })
      .min(4)
      .max(6),
    city: z.string({
      required_error: 'city is required',
      invalid_type_error: 'city should be 10 digit',
    }),
    state: z.string({
      required_error: 'state is required',
      invalid_type_error: 'state should be 10 digit',
    }),
    type: z
      .string({
        required_error: 'type is required',
        invalid_type_error: 'type should be 10 digit',
      })
      .or(z.literal('home'))
      .or(z.literal('office')),
  })
  .required();

export class CreateAddressDto {
  @ApiProperty({ example: '7NCR' })
  line1: string;

  @ApiProperty({ example: '' })
  line2: string;

  @ApiProperty({ example: '390021' })
  pincode: string;

  @ApiProperty({ example: 'Vadodara' })
  city: string;

  @ApiProperty({ example: 'Gujarat' })
  state: string;

  @ApiProperty({ examples: ['home', 'office'] })
  type: string;
}
