import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
   await mongoose.connect(connectionSrt)
   const data = await Product.find()
   console.log(data)
   console.log(data ,"Product")
   console.log(connectionSrt,"oo")
    return NextResponse.json({result:data})
}

export async function PUT(){
    await mongoose.connect(connectionSrt)
    let data = new Product({
        name:"nike",
        age:'54'
    });
    const result = await data.save()
    return NextResponse.json({result,success:true})
}