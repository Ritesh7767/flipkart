import Navbar from './components/Navbar/Navbar'
import Category from './components/Category/Category'
import Poster from './components/Poster'
import Product from './components/Product'
import FeaturedBrand from './components/FeaturedBrand'
import FourCard from './components/FourCard'
import Offer from './components/Offer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='p-1'>
        <Category/>
        <Poster/>
        {/* <Product category='smartphone'/> */}
        {/* <Offer size={3}/> */}
        <Product category='fashion'/>
        <FeaturedBrand/>
        {/* <FourCard category='gadget'/> */}
      </div>
      {/* <Product category='deal'/>
      <Product category='appliances'/> */}
    </>
  )
}

export default Home