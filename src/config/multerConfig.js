import multer from 'multer';
import {extname, resolve} from 'path';

const Aleatorio = () => Math.floor(Math.random() * 10000 + 10000)
export default {
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return cd(new multer.MulterError('ARQUIVO NÃO AUTORIZADO!'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${Aleatorio()}${extname(file.originalname)}`)
    }
  }),
}
