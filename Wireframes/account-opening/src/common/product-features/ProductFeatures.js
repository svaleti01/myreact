import React from 'react';
import { Row, Col, Typography } from 'antd';
import { 
    CheckCircleTwoTone, 
    CreditCardOutlined, 
    CloudOutlined, 
    MobileOutlined,
    AccountBookOutlined,
    MoneyCollectOutlined,
    PercentageOutlined
} from '@ant-design/icons';
import FeatureCard from '../feature-card/FeatureCard';
import styles from './ProductFeatures.module.css';

const { Title, Paragraph, Text } = Typography;

const ProductFeatures = ({ }) => {
    return (
        <>
            <div className={styles.featuresCard}>
                <Typography>
                    <Title level={3}>Oriental Bank Rates and Features</Title>
                    <Paragraph>The common features across all Oriental Savings Account</Paragraph>
                    <Paragraph>
                        <ul className={styles.features}>
                            <li><CheckCircleTwoTone twoToneColor="#52c41a" /> No account minimums</li>
                            <li><CheckCircleTwoTone twoToneColor="#52c41a" /> No monthly maintenance fees</li>
                            <li><CheckCircleTwoTone twoToneColor="#52c41a" /> Competitive rates</li>
                        </ul>
                    </Paragraph>
                    <div className={styles.featureCardSection}>
                        <Row gutter={16}>
                            <Col span={4}>
                                <FeatureCard
                                    icon={<CreditCardOutlined />}
                                    title='Mastercard'
                                />
                            </Col>
                            <Col span={4}>
                                <FeatureCard
                                    icon={<CloudOutlined />}
                                    title='Online Banking'
                                />
                            </Col>
                            <Col span={4}>
                                <FeatureCard
                                    icon={<MobileOutlined />}
                                    title='Mobile Banking'
                                />
                            </Col>
                            <Col span={4}>
                                <FeatureCard
                                    icon={<AccountBookOutlined />}
                                    title='Direct Deposit'
                                />
                            </Col>
                            <Col span={4}>
                                <FeatureCard
                                    icon={<MoneyCollectOutlined />}
                                    title='ATMs'
                                />
                            </Col>
                            <Col span={4}>
                                <FeatureCard
                                    icon={<PercentageOutlined />}
                                    title='Higher Interest'
                                />
                            </Col>
                        </Row>
                    </div>
                </Typography>
            </div>
        </>
    )
}

export default ProductFeatures
