'use client'


import { Lock, Mail } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'



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

  return (
    <>
      <form className='mt-8 space-y-6'>
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
                <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
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
      </form>
    </>
  )
}

export default LoginForm