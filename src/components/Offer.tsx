import useFetch from '../customHooks/useFetch'

const Offer = ({size}: {size: number}) => {

    const [data] = useFetch(`server/api/v1/offer?size=${size}`)

  return (
    <div className='grid grid-cols-3 gap-1 pl-1 pr-1 flex-wrap w-[850px] md:w-full'>
        {
            data?.map((ele, i) => (
                <img key={i} src={ele.image} className=''/>
            ))
        }
    </div>
  )
}

export default Offer