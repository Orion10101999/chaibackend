import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect("mongodb+srv://rajeev:rajeev1234@rajeev.wibxe9g.mongodb.net")
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MongoDB connection Error",error);
    }
}


export default connectDB;