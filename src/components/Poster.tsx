import { useState } from 'react'
import { Leftbutton, RightButton } from './button'
import useFetch from '../customHooks/useFetch'

const Poster = () => {

    const [poster] = useFetch('server/api/v1/poster')
    const [translate, setTranslate] = useState(0)

    const handleClick = (num: number) => {
      setTranslate(prev => prev + num)
    }

  return (
    <div className='border border-black relative overflow-hidden min-h-28 max-h-52 h-52'>
        {
          poster?.map((ele,i: number) => (
            <img key={i} src={ele.image} className='absolute w-full h-full object-cover' style={{left: `${i*100}%`, transform: `translateX(${translate * 100}%)`, transition: "transform 0.4s ease-in-out"}}/>
          ))
        }
        {translate && <Leftbutton func={handleClick} argument={1}/>}
        {(translate <= 0 && translate >= -5) && <RightButton func={handleClick} argument={1}/>}
      <div className='absolute flex items-center justify-center w-full gap-3 bottom-4 bg-transparent'>
        <span className='bg-slate-500 rounded-full w-2 h-2 cursor-pointer' onClick={() => setTranslate(0)} style={{backgroundColor: translate == 0 ? "white" : ""}}></span>
        <span className='bg-slate-500 rounded-full w-2 h-2 cursor-pointer' onClick={() => setTranslate(-1)} style={{backgroundColor: translate == -1 ? "white" : ""}}></span>
        <span className='bg-slate-500 rounded-full w-2 h-2 cursor-pointer' onClick={() => setTranslate(-2)} style={{backgroundColor: translate == -2 ? "white" : ""}}></span>
        <span className='bg-slate-500 rounded-full w-2 h-2 cursor-pointer' onClick={() => setTranslate(-3)} style={{backgroundColor: translate == -3 ? "white" : ""}}></span>
        <span className='bg-slate-500 rounded-full w-2 h-2 cursor-pointer' onClick={() => setTranslate(-4)} style={{backgroundColor: translate == -4 ? "white" : ""}}></span>
        <span className='bg-slate-500 rounded-full w-2 h-2 cursor-pointer' onClick={() => setTranslate(-5)} style={{backgroundColor: translate == -5 ? "white" : ""}}></span>
        <span className='bg-slate-500 rounded-full w-2 h-2 cursor-pointer' onClick={() => setTranslate(-6)} style={{backgroundColor: translate == -6 ? "white" : ""}}></span>
      </div>
    </div>
  )
}

export default Poster

