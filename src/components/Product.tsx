import { useState } from "react"
import { Leftbutton, RightButton } from "./button"
import useFetch from "../customHooks/useFetch"

const Product = ({category}: {category: string}) => {

    let [data] = useFetch(`server/api/v1/product/${category}`)
    let [translate, setTranslate] = useState(0)

    const handleClick = (num: number) => {
        setTranslate(prev => prev + num)
    }
    
  return (
    <div className="flex flex-col gap-4 mt-2">
        <h1 className="font-semibold text-xl mt-2 ml-5">Deals on smartphone</h1>
        <div className="relative overflow-hidden md:h-56">
            {
                data?.map((ele, i)=> (
                    <div className="flex items-center h-24 gap-6 box-border md:absolute md:w-52 md:h-56 md:flex-col md:gap-0 md:p-2 md:border border-gray-300 md:rounded-sm" style={{left: `${i*215}px`, transform: `translateX(${translate * 105}%)`, transition: 'transform 0.4s ease-in-out'}}>
                        <img src={ele.image} className="h-20 w-16 object-contain md:h-[170px] md:w-full"/>
                        <div className="md:w-full text-center">
                            <p className="whitespace-nowrap text-sm">{ele.title}</p>
                            <span className="font-bold">{ele.price}</span>
                        </div>
                        <span className="absolute right-8 md:hidden">&#10095;</span>
                    </div>
                ))
            }
            {translate && <Leftbutton func={handleClick} argument={2}/>}
            {!translate && <RightButton func={handleClick} argument={2}/>}
        </div>
    </div>
  )
}

export default Product