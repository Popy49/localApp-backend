export class CreateStorageSpaceDto {
  name: string;
  description: string;
  location: string;
  price: number;
  size: number;
  availablePeriodId: number;
  // photos: File[];
  ownerId: number;
}
// Assuming this is the ID of the user who owns the storage space
