import React from 'react';
import ProductTabs from '../../common/tabs/ProductTabs';
import BannerComponent from '../../common/banner-component/BannerComponent';
import ProductFeatures from '../../common/product-features/ProductFeatures';
import OpenAccount from '../../common/open-account/OpenAccount';

const ProductTypeViewContent = ({}) => {
  return (
    <>
      <BannerComponent />
      <ProductFeatures />
      <ProductTabs />
      <OpenAccount />
    </>
  )
}

export default ProductTypeViewContent
