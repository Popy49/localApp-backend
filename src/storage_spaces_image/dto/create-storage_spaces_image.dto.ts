import 'multer';
import { Express } from 'express';

export class CreateStorageSpacesImageDto {
  file: Express.Multer.File;
}