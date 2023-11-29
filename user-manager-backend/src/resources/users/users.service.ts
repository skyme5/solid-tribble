import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { queryFailedGuard } from 'src/utils/common';
import Address from '../address/entities/address.entity';
import { subYears, format as dateFormat } from 'date-fns';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      mobile: createUserDto.mobile,
      birthday: createUserDto.birthday || null,
    });

    try {
      await this.userRepository.save(newUser);
    } catch (error) {
      console.log(error);
      if (queryFailedGuard(error)) {
        if (error.code === '23505') {
          throw new ConflictException(error.detail);
        }
      }
    }

    return newUser;
  }

  async findAll(
    searchText: string,
    ageType: string,
    ageValue: number,
    city: string,
  ) {
    const cutoffDate = subYears(Date.now(), ageValue);

    const usersInCity = this.userRepository
      .createQueryBuilder('user')
      .innerJoin(Address, 'address', 'user.id = address.userId')
      .where(
        `LOWER(address.city) LIKE :city
        AND 
          (
          user.firstName LIKE :searchText OR 
          user.lastName LIKE :searchText OR 
          user.email LIKE :searchText
          ) 
        AND user.birthday ${ageType} date(:ageValue)`,
        {
          searchText: `%${searchText}%`,
          city: `%${city || ''}%`,
          ageValue: dateFormat(cutoffDate, 'yyyy-MM-dd'),
        },
      );

    return usersInCity.getMany();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (user) return user;

    throw new NotFoundException('Could not find the user');
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);

    return this.userRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
