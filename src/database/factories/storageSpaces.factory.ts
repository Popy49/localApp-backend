import { faker } from '@faker-js/faker';
import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-factory';
import { AppDataSource } from 'src/config/db.config';
import { StorageSpace } from 'src/storage_spaces/entities/storage_space.entity';

export default class StorageSpacesFactory extends Factory<StorageSpace> {
  protected entity = StorageSpace;
  protected dataSource = AppDataSource; // Déclarez une propriété locale pour dataSource

  protected attrs(): FactorizedAttrs<StorageSpace> {
    return {
        location: faker.location.streetAddress(),
        price: faker.number.int({ min: 10, max: 500 }),
        size: faker.number.int({ min: 1, max: 100 }),
        description: faker.lorem.paragraph(),
        
    };
  }
}