'use client'

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { useUser } from '@/context/UserContext'

const ProfilePage = () => {

  const {data, logout} = useUser()

  return (
    <>
      <div>ProfilePage</div>
      <hr />
      <p>Profile</p>
      <h1>{data}</h1>
      <hr />
      <button onClick={logout} className='bg-blue-500 mt-4 p-3'>Logout</button>
        &nbsp;  &nbsp;  
      

    </>
    
  )
}

export default ProfilePage