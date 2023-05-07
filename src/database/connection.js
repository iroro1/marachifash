import mongoose from "mongoose";
import { designerSchema } from "./schema";

export let DesignerModel, designerModelDB;
export const main = async () => {
  const res = await mongoose
    .connect(
      "mongodb+srv://ojigboleo:tribalTrendzLeo@cluster0.ez8amky.mongodb.net/test"
    )
    .then(() => {
      // DesignerModel = mongoose.model("Designer", designerSchema);
      console.log(res, "DB Connected");
    })
    .catch((err) => {
      // DesignerModel = mongoose.model("Designer");
      console.log(err);
    });
};
