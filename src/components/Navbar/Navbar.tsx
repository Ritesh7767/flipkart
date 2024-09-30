import { FaBars } from "react-icons/fa6";
import { RiMobileDownloadLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import Input from "../Input";
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {

  const [arrow, setArrow] = useState(false)

  const handleMouseOver = () => {
    setArrow(true)
  }

  const handleMouseOut = () => {
    setArrow(false)
  }

  return (
    <div className="w-4/5 md:w-full p-1 md:p-3 mt-1 flex gap-4 items-center m-auto text-lg">
      <div className="flex items-center gap-4 w-1/2 h-full md:w-4/5">
        <div className="md:hidden">
          <FaBars/>
        </div>
        <div className="">
          <img className="md:hidden" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg" alt="" />
          <img className="hidden md:block" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo"/>
        </div>
        <div className="hidden md:block w-[90%] ">
          <Input/>
        </div>
      </div>
      <div className="flex justify-end md:justify-between gap-2 items-center w-1/2">
        <div className="flex items-center gap-1 h-10 hover:bg-[#2A55E5] hover:text-white rounded-md text-md p-1" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <span className="text-xl"><CgProfile/></span>
          <p>Login</p>
          <p style={{rotate: arrow ? "180deg": "0deg", transitionDuration: "0.3s"}} className="transition-all"><MdKeyboardArrowDown/></p>
        </div>
        <div className='flex items-center gap-1 '>  
          <span className="text-2xl"><IoCartOutline/></span>
          <p className="hidden md:block">Cart</p>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <span className="text-2xl">
            <AiOutlineShop/>
          </span>
          <p className="hidden lg:block">Become a Seller</p>
        </div>
        <div className="hidden lg:block">
          <HiOutlineDotsVertical/>
        </div>
      </div>
    </div>
  )
}

export default Navbar