import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
    <div className="container mx-5 px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo/Brand */}
            <div className="mb-2 md:mb-0">
                <Link href='/' className="text-3xl font-bold text-blue-600">ReactPost</Link>
            </div>
            
            {/* Navigation - with clear spacing */}
            <nav className="flex items-center space-x-5 md:space-x-2 lg:space-x-4">
                <Link 
                    href='/' 
                    className="mx-1 md:mx-2 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
                >
                    Home
                </Link>

                <Link 
                    href='/post' 
                    className="mx-1 md:mx-2 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
                >
                    All Posts
                </Link>
                
                <Link 
                    href='/login' 
                    className="mx-1 md:mx-2 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
                >
                    Login
                </Link>
                
                <Link 
                    href='/profile' 
                    className="mx-1 md:mx-2 ml-2 md:ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    Profile
                </Link>
            </nav>
        </div>
    </div>
</header>
  )
}

export default Navbar