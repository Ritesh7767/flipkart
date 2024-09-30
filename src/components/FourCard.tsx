import useFetch from '../customHooks/useFetch'
import Arrow from './Arrow'

const FourCard = ({category}: {category: string}) => {

    const [data] = useFetch(`server/api/v1/product/${category}`)
    console.log(data)
  return (
    <div className='p-3'>
        <div className='flex justify-between'>
            <h1 className='font-semibold text-xl mb-4'>Discount Just for you</h1>
            <Arrow/>
        </div>
        <div className='flex flex-wrap h-[] gap-2'>
            {
                data?.map(ele => (
                    <div className='flex flex-col border border-slate-300 text-center box-border w-44 rounded-md'>
                        <div className='h-44 p-4 flex justify-center items-center'>
                            <img src={ele.image} className='h-full w-full'/>
                        </div>
                        <div className=' w-full'>
                            <p className='font-bold'>{ele.title}</p>
                            <span>{ele.price}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FourCard