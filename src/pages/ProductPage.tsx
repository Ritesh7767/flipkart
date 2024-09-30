import axios from "axios"
import { useEffect, useState } from "react"
import ShoeCard from "../components/ShoeCard"
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";

export interface productDataInterface {
  _id: string,
  image: string[],
  brand: string[],
  title: string[],
  flipkartAssured: boolean,
  price: number,
  ogPrice: number,
  special?: string,
  qtyAlert?: string,
  color: string[],
  size: number[]
}

const ProductPage = () => {

  const [productData, setProductData] =  useState<productDataInterface[]>()
  const [translateFilter, setTranslateFilter] = useState(false)

  useEffect(() => {
    (
      async () => {
        const response = await axios.get('server/api/v1/product/shoe')
        setProductData(response.data.data)
      }
    )()
  }, [])

  console.log(productData)

  return (
    <div className="relative md:flex border-2 border-black gap-2">
      <button className="border border-black rounded-md w-12 active:bg-[#2A55E5] active:text-white md:hidden" onClick={() => setTranslateFilter(prev => !prev)} >filter</button>
      <div className="absolute z-10 h-full xs:w-full sm:w-3/5 md:static md:w-1/4 border-2 border-black bg-slate-500" style={{left: translateFilter ? "0%": "-100%", transition: '0.4s all ease'}}>
        
      </div>
      <div className="md:w-3/4 flex flex-wrap gap-x-2 gap-y-9 border-2 border-black overflow-hidden">
        {productData?.map((data, i) => (
          <Link key={i} to={`/product/${data._id}`}>
            <ShoeCard key={i} data={data}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductPage