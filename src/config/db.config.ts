import { Owner } from "src/owner/entities/owner.entity";
import { StorageSpace } from "src/storage_spaces/entities/storage_space.entity";
import { User } from "src/users/entities/user.entity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
       User, Owner, StorageSpace
    ],
    synchronize: process.env.DB_SYNC === 'true',
    logging: process.env.DB_LOGGING === 'true',
    migrations: ['dist/migrations/*.js'],
   
    ssl: process.env.DB_SSL === 'true' ? {
        rejectUnauthorized: false,
    } : false,
});

