import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import OwnerFactory from '../factories/owner.factory';
import StorageSpacesFactory from '../factories/storageSpaces.factory';
import UserFactory from '../factories/user.factory';


export default class UserSeeder extends Seeder {
  async run(dataSource: DataSource) {
    console.log('Seeding users...',dataSource);
    await new UserFactory().createMany(10);
    const owners = await new OwnerFactory().createMany(10)
    for (const owner of owners) {
      await new StorageSpacesFactory().createMany(3, {
        owner: owner,
      });
    }
}}