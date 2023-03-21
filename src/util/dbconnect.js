import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: './.env' });

mongoose.set('strictQuery', false);
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.log('Error connecting to database: ', error.message);
    });
export default mongoose;