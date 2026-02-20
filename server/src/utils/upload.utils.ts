import { Readable } from 'stream';
import cloudinary from '../config/upload.config';

export default async function uploadImgToCloudinary(file: Readable) {
    return new Promise((resolve, reject)=> {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder: "error_img",
            resource_type: "image",
        }, (err, res)=> {
            if (err){
                return reject(err)
            }
            resolve(res)
        });

        file.pipe(uploadStream);
    });
}
