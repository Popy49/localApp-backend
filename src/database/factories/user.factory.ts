import { faker } from '@faker-js/faker';
import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-factory';
import { AppDataSource } from 'src/config/db.config';

import { User } from 'src/users/entities/user.entity';

export default class UserFactory extends Factory<User> {
  protected entity = User;
  protected dataSource = AppDataSource; // Déclarez une propriété locale pour dataSource

  protected attrs(): FactorizedAttrs<User> {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.string.uuid() + faker.internet.email(),
      password: faker.internet.password(),
      role: 'user',
      updated_at: faker.date.past(),
      created_at: faker.date.past(),
      isVerified: faker.datatype.boolean(),
   
    };
  }
}