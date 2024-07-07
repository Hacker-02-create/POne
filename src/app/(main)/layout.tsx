"use client"
import BottomNavBar from "@/components/bottomNav";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function A({children}:{children:React.ReactNode}){
    const {data:session}=useSession()
    const Router=useRouter()     
// if(!session)Router.push("/signin")
    
        return (
            <div className="bg-zinc-800 w-full h-full">
                <span className='text-white text-3xl font-medium relative top-4 left-4 '>PortalOne</span>
                {children}
               <div className="mt-8"> <BottomNavBar/></div>
            </div>
        )
}