'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";



interface UserContextType {
    data: string | null,
    setData: (username: string | null) => void,
    logout: ()=> void,
    loading: boolean,
    isLogged: boolean,
    setIsLogged: (value: boolean) => void
}


const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider = ({children}: {children: ReactNode}) => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    const [isLogged, setIsLogged] = useState<boolean>(false)


    const router = useRouter()

    
    useEffect(()=>{
    const getUserDetails = async ()=>{
        try {
            const res = await axios.get('/api/users/me', { withCredentials: true })
            setData(res.data.data.userName)
            setIsLogged(true)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          // console.log(error.message)
          setIsLogged(false)
          setData(null)
          // toast.error('Falied to load the user')
        } finally{
          setLoading(false)
        }
  }
  getUserDetails()
  },[])


  const logout = async() =>{
    try {
     await axios.get('/api/users/logout')
      toast.success('Logout Successful')
      setIsLogged(false)
      setData(null)
      router.push('/login')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log(error.message,"This")
      toast.error(error.message)
    }
  }


  return(
    <UserContext.Provider value={{data, loading, logout, isLogged, setIsLogged, setData}}>
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