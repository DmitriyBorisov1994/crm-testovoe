import React from 'react'
import { Layout } from 'antd';
import LoginForm from '../components/LoginForm/LoginForm';
import { Typography } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const LoginPage = () => {
   return (
      <Layout className='login_page-wrapper'>
         <Content className='login_page-content'>
            <Title style={{ fontSize: '64px', marginBottom: '22px' }}>LOGO</Title>
            <Text style={{ fontSize: '36px' }}>
               Welcome To CRM System <br />
               Sign In To Your Account
            </Text>
            <LoginForm />
         </Content>
      </Layout>
   )
}

export default LoginPage