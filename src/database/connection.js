import mongoose from "mongoose";
import { designerSchema, userSchema } from "./schema";

export let DesignerModel;
export let UserModel;
export const main = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ojigboleo:tribalTrendzLeo@cluster0.ez8amky.mongodb.net/test"
    )
    .then(() => {
      DesignerModel = mongoose.model("Designer", designerSchema);
      UserModel = mongoose.model("User", userSchema);
    })
    .catch(() => {
      DesignerModel = mongoose.model("Designer");
      UserModel = mongoose.model("User");
    });
  console.log(res, "DB Connected");
};
