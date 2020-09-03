import React from 'react'

import Content from './ProductTypeViewContent';
import styles from './ProductTypeView.css';

import { PageHeader, Button, Tag, Typography } from 'antd';

const ProductTypeView = ({}) => {
  const routes = [
    {
      path: '',
      breadcrumbName: 'Home',
    },
    {
      path: 'savings',
      breadcrumbName: 'Online Savings Account',
    },
  ];
  
  return (
    <>
      <PageHeader
        title="Open Savings Account"
        className="site-page-header"
        breadcrumb={{ routes }}
      >
        <Content />
      </PageHeader>
    </>
  )
}

export default ProductTypeView
