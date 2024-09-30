import { FaShoppingCart } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="bg-[#2873EE] pl-20 pr-20 text-white font-bold p-2 sticky">
        <ul className="flex justify-around list-none bg-inherit items-center">
          <li className="flex w-[45%] bg-inherit gap-2 ">
            <img className="" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg" alt="" />
            <input className="w-full rounded-sm font-normal text-sm outline-none text-black p-2" type="text" placeholder="Search for products, brand and more"/>
          </li>
          <li className="bg-inherit">
            My Account
          </li>
          <li className="bg-inherit">
            Become a Seller
          </li>
          <li className="bg-inherit">
            More
          </li>
          <li className="bg-inherit flex justify-center items-center">
            <FaShoppingCart/>
            Cart
          </li>
        </ul>
      </div>
      <ul className="flex list-none justify-around items-center font-semibold p-1">
        <li>Electronics</li>
        <li>TVs & Appliances</li>
        <li>Men</li>
        <li>Women</li>
        <li>Baby & Kids</li>
        <li>Home & Furniture</li>
        <li>Sports, Books & More</li>
        <li>Flights</li>
        <li>Offer Zone</li>
        <li>Grocery</li>
      </ul>
      <Outlet/>
    </>
  )
}

export default Nav