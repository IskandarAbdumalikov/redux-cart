import React from 'react'
import { useSelector } from 'react-redux'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper';
import Empty from '../../components/empty/Empty';

const Wishlist = () => {
  let wishlistData = useSelector(state => state.wishlist.value)
  console.log(wishlistData);
  return (
    <div>
        
        {
          wishlistData.length ? 
          <ProductWrapper title="Sevimlilar" data={wishlistData}/>
          :
          <Empty 
            title="Sevimlilar bo'sh"
            url="https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Shoulder-shrugging-man-Cartoon-characte-Graphics-60333216-1.png"/>          
        }
    </div>
  )
}

export default Wishlist