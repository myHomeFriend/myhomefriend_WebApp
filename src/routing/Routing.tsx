import React from 'react'
import { Routes ,Route} from 'react-router-dom' 
import Brand from '../pages/Brand/Brand'
import Category from '../pages/Category/Category'
import Error from '../pages/Error/Error'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'
import ProductType from '../pages/ProductType/ProductType'
import SubCategory from '../pages/SubCategory/SubCategory'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categoryCode/c" element={<Category />} /> 
      <Route path="/:categoryCode/:subcategoryCode/s" element={<SubCategory/>} /> 
      <Route path="/:categoryCode/:subcategoryCode/:productTypeCode/pt" element={<ProductType />} />
      <Route path="/:productCode/product" element={<Product />} />
      <Route path="/brand/:brandCode" element={<Brand />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routing