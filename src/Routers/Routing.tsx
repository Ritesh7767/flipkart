import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import ProductPage from "../pages/ProductPage"
import Nav from "../components/Navbar/Navbar2"
import ProductDetail from "../pages/ProductDetail"

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route element={<Nav/>}>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Route>
        </Routes>
    )
}

export default Routing