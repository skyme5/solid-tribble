import { faker } from '@faker-js/faker';
import { format } from 'date-fns';
import { User } from 'src/resources/users/entities/user.entity';
import { define } from 'typeorm-seeding';

define(User, () => {
  const user = new User();
  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.birthday = format(faker.date.past(), 'yyyy-MM-dd');
  user.email = faker.internet.email({});
  user.mobile = faker.helpers.fromRegExp('[6789][0-9]{9}');
  return user;
});
