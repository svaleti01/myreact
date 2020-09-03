import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import Result404 from '../views/result404/result404'

import SampleView from '../views/SampleView'
import HeaderMenu from '../common/menu/HeaderMenu'
import CountryStateDropdown from '../common/dropdowns/country-state-selector/country-state-dropdown'
import styles from './Landing.module.css'
import ChatWidget from '../common/chat-widget/ChatWidget'
import LoginPage from '../views/LoginPage/LoginPage'
import HomePage from '../views/HomePage/HomePageView'
import ToggleView from '../views/sample/toggle-view/ToggleView'
import ProductTypeView from '../views/product-type/ProductTypeView';
import StepBuilderView from '../views/sample/step-builder-view/StepBuilderView'
import CreateAccountView from '../views/create-account/CreateAccountView'
import ScrollToTop from './scrollToTop'
import CustomerBasic from '../views/create-account/CustomerBasicInfo/CustomerBasic'


const { Header, Footer, Content } = Layout

const Landing = () => {
  const [formLayout, setFormLayout] = useState('vertical')
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const headerMenuConf = {
    isVisible: true,
    alignment: 'horizontal',
    menu: [
      {
        name: 'Home',
        key: 'home',
        url: '/',
      },
      {
        name: 'Access your accounts',
        key: 'accounts',
        url: '/accounts',
      },
      {
        name: 'Bank Accounts',
        children: [
          {
            name: 'Checking Accounts',
            key: 'checking',
            url: '/savings',
          },
          {
            name: 'Saving Accounts',
            key: 'saving',
            url: '/savings'
          },
          {
            name: 'Deposit Certificates',
            key: 'deposit',
            url: '/savings',
          },
        ]
      },
      {
        name: 'IRA Accounts',
        children: [
          {
            name: 'Diversified Growth IRA (DGI)',
            key: 'dgiira',
            url: '/dgiira',
          },
          { name: 'Other IRAs', key: 'otherira', url: '/otherira' },
        ],
      },
      {
        name: 'For Your Business',
        children: [
          {
            name: 'Commercial Credit',
            key: 'commercialcredit',
            url: '/commercial-credit',
          },
          {
            name: 'Commercial Accounts',
            key: 'commercialaccounts',
            url: '/commercial-accounts'
          },
          {
            name: 'Deposit Certificates',
            key: 'deposit',
            url: '/deposit-certificates',
          },
        ],
      },
      {
        name: 'Meet Oriental',
        children: [
          {
            name: 'History',
            key: 'history',
            url: '/history',
          },
          {
            name: 'Culture',
            key: 'culture',
            url: '/culture',
          },
          {
            name: 'Community',
            key: 'community',
            url: '/community',
          },
          {
            name: 'Investor Relations',
            key: 'investorrelations',
            url: '/investor-relations',
          },
          {
            name: 'Join Our Team',
            key: 'career',
            url: '/career',
          },
        ],
      },
      {
        name: 'Branches / ATMs',
        key: 'branches',
        url: '/branches-and-atms',
      },
      {
        name: 'Make an Appointment',
        key: 'appointment',
        url: '/appointment',
      }
    ]
  }
  console.log('styles', styles)
  return (
    <Layout>
      <Header className={styles.header}>
        <span>
          <a href="/">
            <img src={require('../logo/logo.jpg')} alt="OFGBankCorp" />
          </a>
        </span>
      </Header>
      {/* <Content className={styles.content}>
        <Examples />
      </Content> */}
      <CustomerBasic />
      <CountryStateDropdown />
      <Footer className={styles.footer}>
        <p>© 2020 OFG Bancorp. All Rights Reserved.</p>
      </Footer>
    </Layout>
  )
}

export default Landing
