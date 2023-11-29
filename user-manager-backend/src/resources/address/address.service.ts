import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import Address from './entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { queryFailedGuard } from 'src/utils/common';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) private addressRepository: Repository<Address>,
  ) {}

  async create(userId: number, createAddressDto: CreateAddressDto) {
    const newAddress = this.addressRepository.create({
      userId,
      line1: createAddressDto.line1,
      line2: createAddressDto.line2,
      pincode: createAddressDto.pincode,
      city: createAddressDto.city,
      state: createAddressDto.state,
      type: createAddressDto.type,
    });

    try {
      await this.addressRepository.save(newAddress);
    } catch (error) {
      console.log(error);
      if (queryFailedGuard(error)) {
        if (error.code === '23505') {
          throw new ConflictException(error.detail);
        }
      }
    }

    return newAddress;
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    await this.addressRepository.update(id, updateAddressDto);

    return this.addressRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
