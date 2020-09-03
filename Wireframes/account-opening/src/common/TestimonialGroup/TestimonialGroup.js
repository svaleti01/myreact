import React, { Component } from "react";
import styles from './Testimonial.module.css';
import { Carousel } from 'antd';

export default class TestimonialGroup extends Component {
  render() {
    return (<div className={styles.mainDiv}>
      <Carousel
       
      
        autoPlay

      >
        <div>
          <img src="pay.png" />
          <div className={styles.myCarousel}>
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="pay.png" />
          <div className={styles.myCarousel}>
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="pay.png" />
          <div className={styles.myCarousel}>
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
      </div>
    );
  }
}
