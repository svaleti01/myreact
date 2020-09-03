import React from 'react';
import { useHistory} from 'react-router-dom';
import { Card } from 'antd';
import styles from './HoverableFeaturesCard.module.css';

const { Meta } = Card;

const HoverableFeaturesCard = ({ description, title, image, link }) => {
    const history = useHistory();
    const clickHandler = () => {
        history.push(`/${link}`);
    }
    return (
        <>
            <div className={styles.featureCarddiv} >
                <Card
                    hoverable
                    style={{ padding: 0 }}
                    cover={<img className={styles.featureCardImage} alt="example" src={image} />} className={styles.featureCard}
                    onClick={() => clickHandler()}
                >
                    <Meta title={<h4>{title}</h4>} description={description} />
                </Card>
            </div>
        </>
    )
}

export default HoverableFeaturesCard;
