import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
cloudinary.v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const uploadToCloud = async (file) => {
    try {
        const uploadPicture = await cloudinary.v2.uploader.upload(file.path, {
            folder: "TUT-NODE",
            use_filename: true,
        });
        return uploadPicture.secure_url;
    } catch (error) {
        throw error;  
    }
};

