import Head from 'next/head'
import Link from 'next/link'
import Img from 'next/image'
import styles from '../styles/Home.module.css'

import { fromImageToUrl, API_URL } from '../utils/urls'
import { twoDecimals } from '../utils/format'

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Ecommerce Strapi Nextjs </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {products.map(product=>(
        <div key={product.attributes.name} className={styles.product}>
          <Link href={`/products/${product.attributes.slug}`}>
            <a>
          <div className={styles.product__Row}>
            <div className={styles.product__colImg}>
              <img src={fromImageToUrl(product.attributes.image)}/>
            </div>
            <div className={styles.product__Col}>
              {product.attributes.name} ${twoDecimals(product.attributes.price)} 
            </div>
          </div>
          </a>
          </Link>
        </div>
      ))}      */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Our Best Selling Products</h2>

       <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {products.map(product=>(
      <div className="group relative" key={product.attributes.name}>
        
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Link href={`/products/${product.attributes.slug}`}>
        <img src={fromImageToUrl(product.attributes.image)} alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </Link></div> 
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
            <Link href={`/products/${product.attributes.slug}`}>
              <a>
              <div>
                <span aria-hidden="true" className="absolute inset-0">
                </span>{product.attributes.name}
              </div></a>
            </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${twoDecimals(product.attributes.price)}</p>
        </div>
       
      </div>
    ))}
    </div>
  </div>
</div>
    </div>
  )
}

export async function getStaticProps(){
  const product_res = await fetch(`${API_URL}/api/products/?populate=*`)
  const products_json = await product_res.json()
  const products = products_json.data

  return {
    props:{
      products
    }
  }
}