import { UserInterface } from "../domain/interfaces/user.interface";
import { UserRepositoryInterface } from "../domain/interfaces/userRepository.interface";
import multer from "multer";
import path from "path";
import fs from "fs";

export class UpdateUserPhoto {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  private storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, path.join(__dirname, "../../../public/uploads"));
    },
    filename: (_req, file, cb) => {
      const ext = file.originalname.split(".").pop();
      cb(null, `${Date.now()}.${ext}`);
    },
  });

  private fileFilter(_req: any, file: any, cb: any) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Please upload a JPEG, PNG, or JPG image."
        ),
        false
      );
    }
  }

  public upload = multer({
    storage: this.storage,
    fileFilter: this.fileFilter.bind(this),
  }).single("profilePicture");

  async updateUserPhoto(userId: string, filename: string | null) {
    const existingUser = await this.userRepository.getUserByUserId(userId);

    if (existingUser[0].profilePicture) {
      const oldImagePath = path.join(
        __dirname,
        "../../../public/uploads",
        existingUser[0].profilePicture
      );
      fs.unlink(oldImagePath, (err: any) => {
        if (err) {
          console.error("Error deleting old profile picture:", err);
        }
      });
    }

    const user = {
      profilePicture: filename,
    } as UserInterface;

    return await this.userRepository.updateUserInformationByUserId(
      user,
      userId
    );
  }
}
