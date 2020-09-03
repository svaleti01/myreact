import React from 'react';
import { Row, Col } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import styles from './ProductGrid.module.css';
const ProductGrid = ({ gridSpan, header, body }) => {
  return (
    <>
      <Row className={styles.th}>
        {header.map((col) => {
          if (col.headerIndex === '') {
            return <Col span={gridSpan}><span className={styles.super} > {col.headerIndex}</span></Col>
          } else {
            return <Col span={gridSpan} >{col.value}</Col>
          }
        })}
      </Row>
      {body.map((row) => {
        return (
          <Row className={styles.td}>
            {row.cols.map((col) => {
              if (col.checked === true) {
                return <Col span={gridSpan} className={styles.colorGreen}><CheckOutlined /></Col>
              } else {
                return <Col span={gridSpan} >{col.value}</Col>
              }
            })}
          </Row>
        )
      })}
    </>
  )
}


export default ProductGrid