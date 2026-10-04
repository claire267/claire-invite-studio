// Cloud image/video storage via Cloudinary.
// Cloudinary's free tier is enough to start; swap this file's internals
// for AWS S3 later without touching any calling code.
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(base64File: string, folder: string) {
  const result = await cloudinary.uploader.upload(base64File, {
    folder,
    resource_type: "auto", // handles both images and videos
  });
  return result.secure_url;
}
