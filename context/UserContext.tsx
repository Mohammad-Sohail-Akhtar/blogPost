'use client'

import axios from "axios";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";



interface UserContextType {
    data: string | null,
    setData: (username: string | null) => void,
    logout: ()=> void
}


const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider = ({children}: {children: ReactNode}) => {
    const [data, setData] = useState<string | null>(null);
    const router = useRouter()

    useEffect(()=>{
    const getUserDetails = async ()=>{
        try {
            const res = await axios.get('/api/users/me')
            setData(res.data.data.userName)
        } catch (error: any) {
          console.log(error.message)
          toast.error('Falied to load the user')
        }
  }
  getUserDetails()
  },[])


  const logout = async() =>{
    try {
     await axios.get('/api/users/logout')
      toast.success('Logout Successful')
      router.push('/login')
    } catch (error:any) {
      console.log(error.message,"This")
      toast.error(error.message)
    }
  }


  return(
    <UserContext.Provider value={{data, setData, logout}}>
        {children}
    </UserContext.Provider>
  )

}


export const useUser =() =>{
    const context = useContext(UserContext);
    if(!context){
      console.log('Failed')
    }
    return context
}