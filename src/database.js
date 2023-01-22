import mongoose from "mongoose";

mongoose.set('strictQuery', false)

const uri =
"mongodb+srv://root:1234@cluster0.iifcrfm.mongodb.net/db_backendexamen";

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log("Base de datos conectada", db.connection.name);
  } catch (error) {
    console.log(`Error al conectar a la base de datos ${error.message}`);
  }
};
