import React from 'react';
import { Tabs, Typography } from 'antd';
import ProductGrid from '../product-grid/ProductGrid';

import styles from './ProductTabs.module.css';

const { Paragraph, Title } = Typography;
const { TabPane } = Tabs;

const ProductTabs = ({ }) => {
    const tabData = [
        {
            tabTitle: 'Checking Accounts',
            tabDescription: 'Compare the solutions that will make your life easier.',
            gridSpan: 8,
            tabContent: {
                header: [
                    { value: '', headerIndex: '' },
                    { value: 'Free Account', headerIndex: '1' },
                    { value: 'Progresa Account', headerIndex: '2' },
                ],
                body: [
                    {
                        cols: [
                            { value: 'Open it with', checked: false },
                            { value: '$ 25', checked: false },
                            { value: '$ 100', checked: false }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Provide checks', checked: false },
                            { value: 'N/A', checked: false },
                            { value: '', checked: true }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Balance to avoid charges', checked: false },
                            { value: '$0', checked: false },
                            { value: '$500', checked: false }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Pay tiered interest', checked: false },
                            { value: 'N/A', checked: false },
                            { value: '', checked: true }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Credit line', checked: false },
                            { value: 'Up to $ 25,000', checked: false },
                            { value: 'Up to $ 25,000', checked: false }
                        ]
                    }
                ]
            }
        },
        {
            tabTitle: 'Savings Accounts',
            tabDescription: 'Supplement your checking account and cultivate savings.',
            gridSpan: 6,
            tabContent: {
                header: [
                    { value: '', headerIndex: '' },
                    { value: 'Account Save!', headerIndex: '1' },
                    { value: 'ABC Account', headerIndex: '2' },
                    { value: 'Savings CLUB', headerIndex: '3' }
                ],
                body: [
                    {
                        cols: [
                            { value: 'Open it with', checked: false },
                            { value: '$ 25', checked: false },
                            { value: '$ 5', checked: false },
                            { value: '$ 5', checked: false }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Earn interest', checked: false },
                            { value: '', checked: true },
                            { value: '', checked: true },
                            { value: '', checked: true }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Balance to avoid charges', checked: false },
                            { value: '$500', checked: false },
                            { value: '$5', checked: false },
                            { value: '$0', checked: false }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Debit', checked: false },
                            { value: '', checked: true },
                            { value: '', checked: true },
                            { value: '', checked: true }
                        ]
                    }
                ]
            }
        },
        {
            tabTitle: 'Deposit Certificates',
            tabDescription: 'Put your money to pay the term that suits you best.',
            gridSpan: 6,
            tabContent: {
                header: [
                    { value: '', headerIndex: '' },
                    { value: 'Certificate of Deposit', headerIndex: '1' },
                    { value: '', headerIndex: '' },
                    { value: '', headerIndex: '' }
                ],
                body: [
                    {
                        cols: [
                            { value: 'Initial Deposit', checked: false },
                            { value: '$ 1,000', checked: false },
                            { value: '', checked: false },
                            { value: '', checked: false }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Interest rate', checked: false },
                            { value: 'Fixed for the term of the CD', checked: false },
                            { value: '', checked: false },
                            { value: '', checked: false }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Finished', checked: false },
                            { value: '1 month - 5 years', checked: false },
                            { value: '', checked: false },
                            { value: '', checked: false }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Risk level', checked: false },
                            { value: 'Conservative', checked: false },
                            { value: '', checked: false },
                            { value: '', checked: false }
                        ]
                    },
                    {
                        cols: [
                            { value: 'Internet access', checked: false },
                            { value: '', checked: true },
                            { value: '', checked: false },
                            { value: '', checked: false }   
                        ]
                    },
                    {
                        cols: [
                            { value: 'Computation of interest', checked: false },
                            { value: 'Interest computed and credited monthly', checked: false },
                            { value: '', checked: false },
                            { value: '', checked: false }
                        ]
                    }
                ]
            }
        }
    ];

    return (
        <>
            <div className={styles.tabContainer}>
                <div className={styles.tabHeader}>
                    <Typography>
                        <Title level={4}>Compare Accounts</Title>
                    </Typography>
                </div>
                <div>
                    <Tabs defaultActiveKey="1">
                        {tabData.map((tab, index) => {
                            return <TabPane tab={tab.tabTitle} key={index+1}>
                                        <Typography>
                                            <Paragraph>{tab.tabDescription}</Paragraph>
                                        </Typography>
                                        <ProductGrid gridSpan={tab.gridSpan} header={tab.tabContent.header} body={tab.tabContent.body} />
                                    </TabPane>
                        })}
                        
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default ProductTabs