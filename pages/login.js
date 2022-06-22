import Head from 'next/head'
import {useContext, useState} from 'react'
import AuthContext from '../context/AuthContext'
import styles from '../styles/Login.module.css'

export default function Login() {

    const [email ,setEmail ] = useState("")
    const [password ,setPassword ] = useState("")
    const {loginUser} = useContext(AuthContext)

    const handleSubmit = (event) =>{
        event.preventDefault()
        loginUser(email, password)
    }
    return(
        <div>
            <Head>
                <tile>Login</tile>
                <meta name="description" content="Login here to make a purchase" />
            </Head>
            <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Please Sign In</h2>
            <form className='my-6' onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="email-address" className="sr-only">Email address</label>
                <input id="email-address" onChange={(event)=>setEmail(event.target.value)} name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                </div>
                <div>
                <label for="password" className="sr-only">Password</label>
                <input id="password" onChange={(event)=>setPassword(event.target.value)} name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                </div>
            </div>

            <div className='my-6'>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                </span>
                Sign in
                </button>
            </div>
            </form>
            username : user@user.com<br/>
            password : password
        </div>
        </div></div>
    )
}