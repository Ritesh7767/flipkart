import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useFetch from '../customHooks/useFetch'
import { productDataInterface } from '../pages/ProductPage'

const ShoeCard = ({data}:{data: productDataInterface}) => {

    // const [data, setData] = useState(
    //     {
    //         "image": [
    //             "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/o/u/-original-imaghvb6pxynaurx.jpeg?q=70",
    //             "https://rukminim2.flixcart.com/image/612/612/l0fm07k0/shoe/7/o/r/8-390143-8-puma-black-bright-rose-original-imagc7vezdcfwgah.jpeg?q=70",
    //             "https://rukminim2.flixcart.com/image/612/612/l0fm07k0/shoe/f/2/b/8-390143-8-puma-black-bright-rose-original-imagc7ve6dsn5vsj.jpeg?q=70",
    //             "https://rukminim2.flixcart.com/image/612/612/l0fm07k0/shoe/i/7/z/8-390143-8-puma-black-bright-rose-original-imagc7vehzan3gsh.jpeg?q=70"
    //         ],
    //         "brand": "PUMA",
    //         "title": "Crafty Wns Sneakers For Women  (Black , 4)",
    //         "flipkartAssured": false,
    //         "price": 1999,
    //         "ogPrice": 3199,
    //         "size": [
    //             6,
    //             7,
    //             8,
    //             9
    //         ],
    //         "special": "Hot Deal",
    //         "qtyAlert": "Only few left",
    //         "color": [
    //             "#525252",
    //             "#3B3B3F"
    //         ]
    //     }
    // )

    const [topPosition, setTopPosition] = useState(80)
    const [translate, setTranslate] = useState(0)
    const [startTranslate, setStartTranslate] = useState(false)

    useEffect(() => {
        
        let id = undefined
        if(startTranslate){
            id = setInterval(() => setTranslate(prev => (prev + 1) % data.image.length), 2000)
            console.log(translate)
        }
        else clearInterval(id)

        return () => {
            clearInterval(id)
        }

    }, [startTranslate, data.image.length])

  return (
    <div className='cursor-pointer w-[220px] h-96 relative hover:shadow-lg' onMouseOver={() => setTopPosition(70)} onMouseOut={() => setTopPosition(80)}>
        <div className='h-4/5 relative overflow-hidden' onMouseOver={() => setStartTranslate(true)} onMouseOut={() => setStartTranslate(false)}>
            {
                data?.image.map((img: string, i: number) => (
                    <img key={i} src={img} className='absolute h-full object-contain' style={{left: `${i*100}%`, transform: `translateX(${translate * -100}%)`, transition: 'transform 0.5s ease-in-out'}}/>
                ))
            }
        </div>
        <div className='p-1 absolute left-0 right-0' style={{top: `${topPosition}%`, transition: '0.6s'}}>
            <p className='font-semibold text-slate-600'>{data.brand}</p>
            <div className='flex'>
                <p className='whitespace-nowrap text-sm overflow-hidden text-ellipsis'>{data.title}</p>
                {data.flipkartAssured && <img className='h-5' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"/>}
            </div>
            <div className='flex gap-1 items-center'>
                <span className='font-bold'>₹{data.price.toLocaleString("inr")}</span>
                <span className='line-through text-sm font-bold text-slate-600'>₹{data.ogPrice.toLocaleString("inr")}</span>
                <span className='text-green-900 font-bold' >{Math.floor(100 - data.price * 100 / data.ogPrice)}% Off</span>
            </div>
            {data.special && <p className='text-sm font-semibold text-green-600'>{data.special}</p>}
            {data.qtyAlert && <p className='text-[#C70055] text-sm font-bold'>{data.qtyAlert}</p>}
            {
                data.color && <div className='flex gap-2 mt-1'>
                    {
                        data?.color.map((col, i) => (
                            <span key={i} className={`w-5 h-5 rounded-full hover:outline-blue-800 hover:outline outline-offset-2`} style={{backgroundColor: col}}></span>
                        ))
                    }
                </div>
            }
            {
                data.size && <div className='flex gap-1 items-center'>
                    <p className='font-bold text-sm text-slate-600'>Size :-</p>
                    {
                        data?.size.map((ele, i) => (
                            <span className='' key={i}>{ele}</span>
                        ))
                    }
                </div>
            }
        </div>
    </div> 
)
}

export default ShoeCard