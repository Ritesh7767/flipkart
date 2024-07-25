import { useState } from 'react'
import { Leftbutton, RightButton } from './button'
import useFetch from '../customHooks/useFetch'

const FeaturedBrand = () => {
  
  const [featured] = useFetch('server/api/v1/featuredbrand')
  const [translate, setTranslate] = useState(0)
  
  const handleClick = (num: number) => {
    setTranslate(prev => prev + num)
  }

  return (
    <div className='p-1'>
      <h2 className='font-semibold text-xl mb-6 ml-5'>Featured Brand</h2>
      <div className='relative overflow-hidden h-[42vh]'>
        {
          featured?.map((ele, i) => (
            <img src={ele.image} className='absolute w-[35%] h-auto' style={{left: `${i * 36}%`, transform: `translateX(${translate * 105.9}%)`, transition: `transform 0.6s ease`}}/>
          ))
        }
        {translate && <Leftbutton func={handleClick} argument={2}/>}
        {translate >= -5 && <RightButton func={handleClick} argument={2}/>}
      </div>
    </div>
  )
}

export default FeaturedBrand