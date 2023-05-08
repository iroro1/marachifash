import mongoose from "mongoose";
import { designerSchema } from "./schema";

export let DesignerModel;
export const main = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ojigboleo:tribalTrendzLeo@cluster0.ez8amky.mongodb.net/test"
    )
    .then(() => {
      DesignerModel = mongoose.model("Designer", designerSchema);
    })
    .catch(() => {
      DesignerModel = mongoose.model("Designer");
    });
  console.log(res, "DB Connected");
};
