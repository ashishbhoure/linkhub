'use client'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";

export default function LogInWithGoogle(){
    return(
        <button
         onClick={()=> signIn('google')}   
         className="bg-white shadow py-4 w-full flex items-center gap-3 justify-center ">
            <FontAwesomeIcon icon={faGoogle} className="h-6" />
            <span>Sign In with Google</span>
        </button>
    )
}