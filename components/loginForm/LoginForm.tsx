'use client'


import axios from 'axios'
import { Lock, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'



interface IUser {
    email?: string,
    password?: string
}

const LoginForm = () => {

    const [user, setUsers] = useState<IUser>({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<IUser>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()

    const InputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUsers((prev)=>({
            ...prev,
            [name] : value,
        }))
    }

    const validateForm = () => {
        const newErrors: IUser = {};
         if(!user.email){
            newErrors.email = 'Email is required';
         } else if (!/\S+@\S+\.\S+/.test(user.email)){
            newErrors.email = 'Email is invalid'
         }

         if (!user.password){
            newErrors.password = 'Password is required';
         } else if (user.password.length > 6){
            newErrors.password = 'Password must be at least 6 characters'
         }

         setErrors(newErrors);
         return Object.keys(newErrors).length === 0;
    }

    const handleLoginSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const validate = validateForm()
        if (validate){
            try {
            setIsLoading(true);
            const response = await axios.post('/api/users/login', user);
            toast.success('Login success')
            router.push('/')
            
        } catch (error:any) {
            console.log('Login Failed', error.message)
            toast.error(error.message)
        }finally{
            setIsLoading(false)
        }
        }
        
    }

  return (
    <>
      <form className='mt-8 space-y-6' onSubmit={(e)=>handleLoginSubmit(e)}>
        <div className="space-y-5">
            {/* Email */}
            <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-eventes-none">
                        <Mail className='h-5 w-5 text-gray-400'/>
                    </div>
                    <input 
                    type="text"
                    name='email'
                    value={user.email}
                    onChange={(e)=>InputChange(e)}
                    placeholder='Your email please' 
                    className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? "border-red-300" : "border-gray-300"} rounded-lg focus:ring-2 ${errors.email ? "focus:ring-red-500":"focus-ring0blue-500"} focus:border-transparent transition duration-200`}
                    autoComplete='off'
                    />
                </div>
                {errors.email && (
                    <p className='mt-1 text-sm text-red-600'>{errors.email}</p>
                )}
            </div>

            {/* password */}
            <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-eventes-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                    type="password"
                    name='password'
                    value={user.password}
                    onChange={(e)=>InputChange(e)}
                    placeholder='Your password please' 
                    className={`block w-full pl-10 pr-3 py-3 border ${errors.password ? "border-red-300" : "border-gray-300"} rounded-lg focus:ring-2 ${errors.password ? "focus:ring-red-500":"focus-ring0blue-500"} focus:border-transparent transition duration-200`}
                    autoComplete='off'
                    />
                </div>
                {errors.password && (
                    <p className='mt-1 text-sm text-red-600'>{errors.password}</p>
                )}
            </div>
        </div>


         {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-bold text-white cursor-pointer ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loging account...
                </>
              ) : (
                'Login'
              )}
            </button>
          </div>
      </form>
    </>
  )
}

export default LoginForm