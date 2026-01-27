// app/login/page.tsx
// import LoginForm from '@/components/LoginForm';
import LoginForm from '@/components/loginForm/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8 md:p-10">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">R</span>
            </div>
            <span className="text-3xl font-bold text-gray-800">ReactPost</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <LoginForm/>


        {/* Footer Links */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500 transition duration-200">
              Sign up for free
            </Link>
          </p>
          {/* <p className="text-sm">
            <Link href="/forgot-password" className="font-medium text-gray-600 hover:text-blue-600 transition duration-200">
              Forgot your password?
            </Link>
          </p> */}
        </div>
      </div>
    </div>
    </>
    
  );
}