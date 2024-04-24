import { NextResponse } from "next/server";

export async function GET (request,content){
    console.log(content,"content ")
    const studentDetails = content.params.student
    console.log(studentDetails,"student ")
    return  NextResponse.json({result:studentDetails},{status:200})
}