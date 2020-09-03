import React from 'react';
import { Row, Col, Typography } from 'antd';
import { BankTwoTone } from '@ant-design/icons';


import HoverableFeaturesCard from '../HoverableFeaturesCard/HoverableFeaturesCard'
import styles from './HomePageCardsSection.module.css';

const { Title, Paragraph, Text } = Typography;

const HomePageCardsSection = ({ }) => {
    return (
        <>
            <div className={styles.featuresCard}>
                <Typography>
                    
                    <div className={styles.featureCardSection}>
                        <Row gutter={[30,60]}>
                            <Col span={6}>
                                <HoverableFeaturesCard
                                    icon={<BankTwoTone twoToneColor="green"/>}
                                    image='Onli_banking.png'
                                    title='Online banking'
                                    description='Bank with us Anytime Anywhere'
                                    link='login'
                                />
                            </Col>
                            <Col span={6}>
                                <HoverableFeaturesCard
                                    image='Managed_Portfolio.png'
                                    title='Managed Portfolio'
                                    description='Bye advisory fees.Hi free automated investing'
                                    link='login'
                                />
                            </Col>
                            <Col span={6}>
                                <HoverableFeaturesCard
                                    image='Piggy_bank.png'
                                    title='Savings'
                                    description='Make the most of your money '
                                    link='savings'
                                />
                            </Col>
                             <Col span={6}>
                                <HoverableFeaturesCard
                                    image='home_loans.png'
                                    title='Home Loans'
                                    description='Appy for Home Loans as per your convenience'
                                    link=''
                                />
                            </Col>
                           
                        </Row>
                    </div>
                </Typography>
            </div>
        </>
    )
}

export default HomePageCardsSection;
