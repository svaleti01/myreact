import React from 'react';
import { useHistory} from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import CustomButton from '../form/fields/button/CustomButton';
import styles from './BannerComponent.module.css';

const { Title, Paragraph, Text } = Typography;

const BannerComponent = ({ }) => {
    const history = useHistory();
    const redirectToCreateAccount = () => {
        history.push(`/createaccount`);
    }
    return (
        <>
            <div className={styles.bannerCard}>
                <Row gutter={[30, 0]}>
                    <Col span={6}>
                        <div className={styles.bannerImage}>
                            <img
                                src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                                alt="content"
                                width="100%"
                            />
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className={styles.bannerContent}>
                            <Typography>
                                <Title>Open Account at only <Text mark>$25</Text></Title>
                                <Paragraph>
                                    <ul>
                                        <li>Hassle Free</li>
                                        <li>No Hidden Charges</li>
                                        <li>It takes only <Text strong>15 minutes</Text> of your time</li>
                                    </ul>
                                </Paragraph>
                                <CustomButton
                                    type='primary'
                                    size='middle'
                                    shape='round'
                                    icon={<TeamOutlined />}
                                    handleClick={redirectToCreateAccount}>
                                    Open Account Now
                            </CustomButton>
                            </Typography>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default BannerComponent
