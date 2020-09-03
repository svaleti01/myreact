import React from 'react';
import CarousalComponentGroup from '../../common/carousal-component/CarousalComponentGroup';
import HomePageCardsSection from '../../common/HomePageCardsSection/HomePageCardsSection'
import styles from './HomePage.module.css'
import Testimonial from '../../common/Testimonial/Testimonial'

const HomePageContent = ({}) => {
  return (
    <>  
    
      <CarousalComponentGroup />
      <div className={styles.firstDiv}>We’re committed to your personal & financial wellness, as well as supporting our community during this time. </div>
     <HomePageCardsSection />
     {/* <Testimonial/>
         */}
    </>
  )
}

export default HomePageContent;
