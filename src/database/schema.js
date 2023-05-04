import mongoose from "mongoose";

const designerSchema = new mongoose.Schema({
  imgSrc: String,
  name: String,
  country: String,

  works: [
    {
      imgSrc: String,
      copiesSold: Number,
      dateJoined: Date,
      rating: Number,
    },
  ],
});
const userSchema = new mongoose.Schema({
  name: String,
  image: String,
  email: String,
  emailVerified: Date,
  hashedPassword: String,
  createdAt: Date,
  updatedAt: Date,
  favoriteIds: [{ itemName: String, designerId: String }],
  type: String,
  provider: String,
  providerAccountId: String,
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
});

// export const DesignerModel = mongoose.model("Designer");
// export const UserModel = mongoose.model("User");
// export const DesignerModel = mongoose.model("Designer", designerSchema);
// export const UserModel = mongoose.model("User", userSchema);

export const DesignerModel =
  mongoose.model("Designer", designerSchema) || mongoose.model("Designer");
export const UserModel =
  mongoose.model("User", userSchema) || mongoose.model("User");

export const userModelDB = mongoose.model("User");
export const designerModelDB = mongoose.model("Designer");
