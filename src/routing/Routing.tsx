import React from 'react'
import { Routes ,Route} from 'react-router-dom' 
import Brand from '../pages/Brand/Brand'
import Category from '../pages/Category/Category'
import Error from '../pages/Error/Error'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'
import SubCategory from '../pages/SubCategory/SubCategory'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/:category/:subcategory" element={<SubCategory/>} />
      <Route path="/:category/:subcategory/:product" element={<Product />} />
      <Route path="/:brand" element={<Brand />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routing