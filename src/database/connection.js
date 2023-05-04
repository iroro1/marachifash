import mongoose from "mongoose";
export const main = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://ojigboleo:tribalTrendzLeo@cluster0.ez8amky.mongodb.net/test"
  );

  console.log(res, "DB Connected");
};
