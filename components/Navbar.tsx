'use client'
import { useUser } from '@/context/UserContext'
import Link from 'next/link'
const Navbar = () => {


    const user = useUser()
    
    if (!user) return null
    console.log("nsvpsssst")
    
    const { isLogged, data, logout } = user
    console.log(data,'fjd')

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
                {
                        isLogged ? (
                        <>
                           <p>Welcome, <span className='text-blue-700 font-bold'>{data}</span></p>
                           <Link 
                    href='/profile' 
                    className="mx-1 md:mx-2 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
                >
                    Dashboard
                </Link>
                            <button onClick={logout} className="mx-1 md:mx-2 ml-2 md:ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">Logout</button>
                            
                        </>
                    ) : (
                        <>
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
                    className="mx-1 md:mx-2 ml-2 md:ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    Login
                </Link>
                        </>
                    )
                }
                
                       
                  

                
            </nav>
        </div>
    </div>
</header>
  )
}

export default Navbar