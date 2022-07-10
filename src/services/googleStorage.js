import { Storage } from '@google-cloud/storage';
import logger from '../libs/logger.js'

const uploadFile = async (bucketName, filePath) => {
  const storage = new Storage({ keyFilename: "google-cloud-key.json" });

  const response = await storage.bucket(bucketName).upload(filePath, {
    gzip: true,
  });

  return response;
}

export { uploadFile };
