import React from 'react'
import { Avatar, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './Testimonial.module.css'

const Testimonial=({})=>{
return(
<div className={styles.mainDiv}>
    <div className={styles.container}>
        <div className={styles.title}>
    {/* <Avatar style={{ backgroundColor: 'orange' }} icon={<UserOutlined  style={{ fontSize: '50px'}}/>} /> */}
<br></br><p className={styles.para}><span className={styles.avatar1}><UserOutlined/></span> <span> {"    "}Highest rated</span></p>

</div>
    </div>
    <h6></h6>

</div>
);
}
export default Testimonial;