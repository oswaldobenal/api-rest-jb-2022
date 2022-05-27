import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("Connect DB OK");
} catch (error) {
  console.log("Error of Connection to mongodb " + error);
}
