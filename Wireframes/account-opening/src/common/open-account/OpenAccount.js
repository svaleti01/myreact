import React from 'react';
import { useHistory} from 'react-router-dom';
import { Typography } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import CustomButton from '../form/fields/button/CustomButton';
import styles from './OpenAccount.module.css';

const { Title, Paragraph } = Typography;

const OpenAccount = ({ }) => {
    const history = useHistory();
    const redirectToCreateAccount = () => {
        history.push(`/createaccount`);
    }
    return (
        <>
            <div className={styles.featuresCard}>
                <Typography>
                    <Title level={3}>Open Account</Title>
                    <Paragraph>To open the account you must present one (1) of the following primary (and current) identifications</Paragraph>
                    <Paragraph>
                        <ul>
                            <li>Driver's License issued by the government of PR (DTOP)</li>
                            <li>Passport issued by the United States government</li>
                            <li>Green card issued by the United States Department of Naturalization and Immigration (green card)</li>
                            <li>Identification cards issued by the Department of Transportation and Public Works of PR</li>
                            <li>US Armed Force ID Card</li>
                        </ul>
                    </Paragraph>
                    <Paragraph>In the event that the address in the identification is not similar to the one provided for the account or that the identification does not have a physical address, a utility receipt must be provided.</Paragraph>
                    <CustomButton
                        type = 'primary'
                        size = 'middle'
                        shape = 'round'
                        icon = {<TeamOutlined />}
                        handleClick={redirectToCreateAccount}>
                        Open Account Now
                    </CustomButton>
                </Typography>
            </div>
        </>
    )
}

export default OpenAccount
