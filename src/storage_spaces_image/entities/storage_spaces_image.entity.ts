import { StorageSpace } from "src/storage_spaces/entities/storage_space.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StorageSpacesImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    storageSpaceId: number;

    @Column()
    url: string;

    @Column()
    filename: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => StorageSpace, (storage) => storage.photos, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'storageSpaceId' }) // nom en base (facultatif)
    storageSpace: StorageSpace;
}
