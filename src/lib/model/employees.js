import mongoose from "mongoose";


const employeeModel=  mongoose.Schema({
    // name:String,
    age:String,
    
});
export const Employees = mongoose.models.items || mongoose.model("items",{employeeModel})