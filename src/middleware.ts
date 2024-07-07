import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export default function middleware(){
console.log(2);

}
export const config = {
    matcher:[
        '/','/signin'
    ]
}