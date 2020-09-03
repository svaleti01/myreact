import React from 'react';

import styles from './CarousalComponentGroup.module.css';
import { Carousel } from 'antd';
import { Row, Col, Divider } from 'antd';



const CarousalComponentGroup = ({  }) => {
  return (
    <>
        <div >
            <Row gutter={0}>
            
            <Col flex='auto'>
   
                  <Carousel autoplay className={styles.container}>
                      <div >
                    <img className={styles.carouselImage} src='calculatorpic.png' /><br /></div>
                    {/* <div className='inside'><br /><br /><br /><br /><span className='insidespan'>Open an account online from anywhere </span></div> */}
                    {/* <div > <img  className={styles.carosuselImage} src='appointment.png'/><br /></div>
                   <div ><img className={styles.carouselImage} src='pic_bank1.png' /><br /></div> */}
                   <div ><img className={styles.carouselImage} src='pic_bank2.png' /><br /></div>
                   <div ><img className={styles.carouselImage} src='pic_bank3.png' /><br /></div>
                    </Carousel>
                   


                </Col>
              

            </Row>
        </div>
    </>
  )
}

export default CarousalComponentGroup;




