import Head from 'next/head'
import Img from 'next/image'
//import products from '../../products.json'
import { fromImageToUrl,API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'
import BuyButton from '../../components/BuyButtons'

//const product = products[0]

const Product = ({product}) => {
    return(
        <div>
            {product.attributes.meta_title &&
            <title>{product.attributes.meta_title}</title>
            }
             {product.attributes.meta_description &&
            <meta name="description" content={product.attributes.meta_description}/>
                }
    <div className="bg-white">
      <div className="pt-6">
       

        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img src={fromImageToUrl(product.attributes.image)} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover"/>
          </div>
        </div>

          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 ">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.attributes.name}</h1>
            </div>

            <div className="mt-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${twoDecimals(product.attributes.price)}</p>
              
              <BuyButton product={product}/>
              {/* <button type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button> */}
            </div>

            <div className="py-10 ">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                  {product.attributes.content}
                  </p>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}

export async function getStaticProps({params:{slug}}){
    const product_res = await fetch(`${API_URL}/api/products/?filters[slug][$eq]=${slug}&populate=image`)
    const product_json = await product_res.json()
    const found = product_json.data

    return {
        props:{
            product: found[0]
        }
    }
}

export async function getStaticPaths(){
    const product_res = await fetch(`${API_URL}/api/products/?populate=*`)
    const products_json = await product_res.json()
    const products = products_json.data

    return {
        paths: products.map(product=>({
            params: { slug:String(product.attributes.slug)}
        })),
        fallback: false
    }
}

export default Product