import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://swe:swetha%402703@cluster0.hv35p6t.mongodb.net/food-del?retryWrites=true&w=majority')
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error("Connection error", err));
     
}

//mongodb+srv://swe:swetha%402703@cluster0.hv35p6t.mongodb.net/food-del?retryWrites=true&w=majority
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.