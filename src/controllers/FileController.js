import dispatch from './dispatcher.js'
import multer from 'multer'
import fs from 'fs'
import { uploadFile as gcloudUpload } from '../services/googleStorage.js'
import config from '../config.js'

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    var dir = 'temp/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    callback(null, dir)
  },
  filename: (req, file, callback) => {
    let extension = '';
    let fileName = '';

    const originalName = file.originalname || 'Untitled';
    const fileParts = originalName.split(".");

    if (fileParts.length > 1) {
      extension = fileParts[fileParts.length - 1];
      fileName = originalName.slice(0, originalName.length - extension.length - 1);
    } else {
      fileName = fileParts[0];
    }

    callback(null, `${fileName}_${Date.now()}.${extension}`)
  }
})

const maxFileSize = 5 * 1024 * 1024 // 5mb
const uploadToFile = multer({ storage: storage, limits: { fileSize: maxFileSize } }).single('file')
const uploadToCloud = async (filePath) => {
  const result = await gcloudUpload(config['GCLOUD_STORAGE_BUCKET'], filePath);

  return {
    size: result[1].size,
    name: result[1].name,
    url: `https://storage.googleapis.com/${result[1].bucket}/${result[0].id}`,
  };
}

class FileController {
  constructor(req, res, next) {
    this.req = req
    this.res = res
    this.next = next
  }

  static handle(action) {
    return dispatch(FileController, action)
  }

  upload() {
    uploadToFile(this.req, this.res, async (err) => {
      if (err) { return this.next(err) }
      try {
        const meta = await uploadToCloud(this.req.file.path);
        return this.res.send(meta)
      } catch (err) {
        this.next(err)
      }
    })
  }
}

export default FileController


/**
 * Simple Multer version
 * 
 *  const uploadToFile = multer({ desk: 'temp/' }).single('file');
 * 
 * 
 */
