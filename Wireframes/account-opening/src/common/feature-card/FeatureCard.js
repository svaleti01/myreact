import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import styles from './FeatureCard.module.css';

const { Title, Paragraph, Text } = Typography;

const FeatureCard = ({ icon, title }) => {
    return (
        <>
            <Card className={styles.featureCard} style={{ padding: 0 }}>
                <div className={styles.featureCardIcon}>{icon}</div>
                <h4 className={styles.featureCardTitle}>{title}</h4>
            </Card>
        </>
    )
}

export default FeatureCard
