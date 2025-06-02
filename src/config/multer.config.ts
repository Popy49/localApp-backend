import { diskStorage } from "multer";
import { extname } from "path";
import { v4 as uuidv4 } from 'uuid';

export const multerConfig = {
    storage: diskStorage({
      destination: './uploads', // Directory where files will be stored
      filename: (req, file, callback) => {
        const fileExt = extname(file.originalname);
        const fileName = `${file.fieldname}-${uuidv4()}${fileExt}`;
        callback(null, fileName);
      },
    }),
  };