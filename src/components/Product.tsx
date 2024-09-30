import { useState } from "react"
import { Leftbutton, RightButton } from "./button"
import useFetch from "../customHooks/useFetch"
import Arrow from "./Arrow"

const Product = ({category, title}: {category: string, title:string}) => {

    let [data] = useFetch(`server/api/v1/product/${category}`)
    let [translate, setTranslate] = useState(0)

    const handleClick = (num: number) => {
        setTranslate(prev => prev + num)
    }
    
    console.log(title)

  return (
    <div className="flex flex-col gap-4 mt-2">
        <div className="flex justify-between items-center pr-5 pt-2">
            <h1 className="font-semibold text-xl mt-2 ml-5">{title}</h1>
            <Arrow/>
        </div>
        <div className="relative overflow-hidden md:h-56 ml-3">
            {
                data?.map((ele, i)=> (
                    <div className="flex items-center h-24 gap-6 box-border md:absolute md:w-52 md:h-56 md:flex-col md:gap-0 md:p-2 md:border border-gray-300 md:rounded-md" style={{left: `${i*215}px`, transform: `translateX(${translate * 105}%)`, transition: 'transform 0.4s ease-in-out'}}>
                        {
                           typeof ele.image == 'string' && <img src={ele.image} className="h-20 w-16 object-contain md:h-[170px] md:w-full"/>

                        }
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