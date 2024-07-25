import useFetch from '../customHooks/useFetch'

const FourCard = ({category}: {category: string}) => {

    const [data] = useFetch(`server/api/v1/product/${category}`)
    console.log(data)
  return (
        <div className='flex flex-wrap h-[]'>
            {
                data?.map(ele => (
                    <div className='flex flex-col border border-slate-300 text-center box-border w-48'>
                        <div className='h-44   p-4 flex justify-center items-center'>
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
  )
}

export default FourCard