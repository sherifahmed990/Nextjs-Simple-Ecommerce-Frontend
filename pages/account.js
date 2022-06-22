import Head from 'next/head'
import {useContext, useState, useEffect} from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'
import { fromImageToUrl,API_URL } from '../utils/urls'


const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
        const fetchOrders = async () =>{
            if(user){
                try{
                    setLoading(true)
                    const token = await getToken()
                    const order_res = await fetch(`${API_URL}/api/orders/`,{
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })

                    const data = await order_res.json()
                    setOrders(data.data)
                }catch (err){
                    setOrders([])
                }
                setLoading(false)
            }
        }
        fetchOrders()
    }, [user])
    return {orders, loading}
}
export default function Account(){

    const {user, logoutUser, getToken} = useContext(AuthContext)

    const {orders, loading} = useOrders(user, getToken)

    if(!user){
        return(
            <div className='m-6'>
                {/* <p>Please login or register</p> */}
                <Link href='/login'>
                      <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Please Sign in</a>
                </div>
                  </Link>
                {/* <Link href="/"><a>Go Back</a></Link> */}
            </div>
        )
    }else{
    return(
        <div>
            <Head>
               
            </Head>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Account page</h1>
                <br/><hr/>
                <p className="font-medium text-indigo-600 hover:text-indigo-500">Logged in as: </p>{user.data.email}
                {/* <a href="#" onClick={logoutUser}>Logout</a> */}
                <br/><hr/>
                <h3  className="text-xl my-5 font-medium text-indigo-600 hover:text-indigo-500">Your Orders</h3>
                {loading && <p>Loading .........</p>}
                {orders.map((order, key) =>(
                <div className="my-5 bg-white shadow overflow-hidden sm:rounded-lg" key={key}>
                    <div className="px-4 py-5 sm:px-6">
                       Product : {order.attributes.product.data.attributes.name}
                   
                        <p className="mt-1 text-sm text-gray-500">Status : {order.attributes.status}</p>
                        <p className="text-sm font-medium text-gray-900">Total : ${order.attributes.total}</p>
                        <p className="text-sm font-medium text-gray-900">Date: {new Date(order.attributes.createdAt).toLocaleDateString('en-EN')}</p>
                 </div></div>
                ))}
            

            
        </div> 
        </div> 
        </div>
    )
    }
}