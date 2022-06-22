import {useContext} from 'react'
import Link from 'next/link'
import Img from 'next/image'
import {useRouter} from 'next/router'

import AuthContext from '../context/AuthContext'

import styles from '../styles/Header.module.css'

export default function Header() {
    const router = useRouter()
    const isHome = router.pathname ==="/"

    const goBack = (event) =>{
        event.preventDefault()
        router.back()
    }
    const {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
        <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">Simple NextJs Ecommerce App with Tailwind ,Strip payments and Strapi for the backend (work in progress!)</p>
      
        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
             
    
              {/* <!-- Logo --> */}
              <div className="ml-4 flex lg:ml-0 hover:cursor-pointer">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" />
                </a>
              </div>

              <div className="ml-4 flex lg:ml-0 hover:cursor-pointer">
              <a href="/">
               <h1 className='mx-4'>Ecommerce Website</h1>
               </a>
              </div>
    
              <div className="ml-auto flex items-center">
               
    
                <div className="ml-4 flow-root lg:ml-6">
                {user ? (
                  <div className="w-max flex">
                  <Link href='/account'>
                    <a href="#" className="group -m-2 p-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  </Link>

                  <a href="#" className="m-4" onClick={logoutUser}>Logout</a>
                  </div>
                  ):(
                <Link href='/login'>
                      <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                </div>
                  </Link>
                  )}

                 
                </div>

              </div>
            </div>
          </div>
        </nav>
        </div>

  
    )}