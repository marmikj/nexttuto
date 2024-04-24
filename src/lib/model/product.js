import mongoose from "mongoose";


const productModel=  mongoose.Schema({
    name:String,
    age:String
});
export const Product = mongoose.models.products || mongoose.model("products",{productModel})