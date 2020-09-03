import React from 'react'
import { Layout } from 'antd'
import Content1 from './LoginPageContent'
import View from '../../common/view/View'
import styles from './LoginPageContent.module.css'

const LoginPage = ({}) => {
  const { Header, Footer, Sider, Content } = Layout
  return (<div >
    
        <View
          className={styles.view}
          header="OFG Bancorp"
          content={<Content1 />}
        ></View>
        </div>
  )
}

export default LoginPage
