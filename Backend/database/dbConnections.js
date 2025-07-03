import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "MERN_STACK_HMS"
    }).then(()=>{
        console.log("Connected to DB");
    }).catch(err=>{
        console.log(`some error occured while connecting to database:${err}`);
    });
};