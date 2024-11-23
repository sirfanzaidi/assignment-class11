import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholer.typicode.com/posts"


export async function GET (){
    try {
        const response = await fetch (EXTERNAL_API_URL)

        if(!response.ok){
    return NextResponse.json(
        
        {sucess: false, message: "Failted fetch the data from the API"},
        {status: response.status}
      )
    }
    const data = await response.json()


    return NextResponse.json({sucess: true, data})
    } catch (error: any) { 
        return NextResponse.json({
            sucess: false, message: "get the error!",
     })
   }
}