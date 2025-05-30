import multer from "multer";
import path from "path";

const uploadImage = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (
            ext !== ".png" &&
            ext !== ".jpg" &&
            ext !== ".jpeg" &&
            ext !== ".gif" &&
            ext !== ".tif"
        ) {
            return cb(new Error("Invalid image format, try (png, jpg, gif, tif or jpeg) !"), false);
        }
        cb(null, true);
    },
});

const uploadProfile = uploadImage.single("profileImage");

export default uploadProfile;