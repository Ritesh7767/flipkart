import { IoSearchOutline } from "react-icons/io5";

const Input = () => {
  return (
    <div className='flex justify-around items-center bg-[#F0F5FF] rounded-md h-10'>
        <div className='w-[10%] ml-1 flex items-center justify-center'>
            <IoSearchOutline/>
        </div>
        <input type="text" placeholder='Search for Products, Brands and More' className='bg-[#F0F5FF] w-[90%] outline-none text-sm'/>
    </div>
  )
}

export default Input