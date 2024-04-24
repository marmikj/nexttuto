import { connectionSrt } from "@/lib/db";
import { Employee, Employees } from "@/lib/model/employees";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionSrt)
    console.log(connectionSrt,"GET")
    const data = await Employees.find()
    console.log(data ,"employ")
    return NextResponse.json({result : data})
}