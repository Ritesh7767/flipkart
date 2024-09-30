import Navbar from '../components/Navbar/Navbar'
import Category from '../components/Category/Category'
import Poster from '../components/Poster'
import Product from '../components/Product'
import FeaturedBrand from '../components/FeaturedBrand'
import FourCard from '../components/FourCard'
import Offer from '../components/Offer'
import ShoeCard from '../components/ShoeCard'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='pl-2 pr-2 pt-1 flex flex-col gap-2 bg-[#F1F2F4]'>
        <Category/>
        <Poster/>
        <Product title='Appliances' category='appliances'/>
        <Product title='Top Fashion Brands' category='fashion'/>
        <FeaturedBrand/>
        <Offer size={3}/>
        <div className='flex gap-2 bg-transparent'>
          <FourCard category='gadget'/>
          <FourCard category='beauty'/>
          <FourCard category='monsoon'/>
        </div>
        <Product title='Best Fashion For You' category='bestfashion'/>
        <Product title='Deals' category='deal'/>
        <FeaturedBrand/>
        <Offer size={3}/>
        <Product title='Best of Electronics' category='electronic'/>
        <div className='flex gap-2 bg-transparent'>
          <FourCard category='sport'/>
          <FourCard category='toysport'/>
          <img className='h-[95vh]' src="https://th.bing.com/th/id/OIP.iBMRxFvhId_IbMHVjT4kOQAAAA?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <Offer size={3}/>
        <FeaturedBrand/>
        <Product title='Home Decors' category='home'/>
        <Product title='Smartphone' category='smartphone'/>
        <FeaturedBrand/>
        <Offer size={9}/>
      </div>
    </>
  )
}

export default Home