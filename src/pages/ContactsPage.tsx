import { Layout, Divider, Button, Modal } from 'antd';
import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSidebar';
import { LogoutOutlined } from '@ant-design/icons';
import ContactsList from '../components/ContactsList/ContactsList';
import { useState, useCallback } from 'react';
import AddContact from '../components/AddContact';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logOut } from '../redux/reducers/authReducer';
import { selectLogin } from '../redux/selectors/authSelectors';

const { Header, Content, Sider, Footer } = Layout;

const ContactsPage = () => {

   const dispatch = useAppDispatch()
   const login = useAppSelector((state) => state.auth.login)

   return (
      <Layout className='contacts_page-wrapper'>
         <Sider collapsed={false} theme='light' trigger={null}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
               <h1 style={{ fontSize: 64, lineHeight: '70px', margin: '32px 0px' }}>LOGO</h1>
               <AppSidebar />
               <div>
                  <Divider style={{ margin: 0 }} />
                  <div>{login}</div>
                  <Button block icon={<LogoutOutlined />}
                     onClick={() => {
                        dispatch(logOut())
                        console.log(login)
                     }}
                     type="text">Log out</Button>
               </div>
            </div>
         </Sider>
         <Layout>
            <Header className='contacts_header-wrapper'>
               <AppHeader />
            </Header>
            <Content style={{ backgroundColor: '#F5F5F5' }}>
               <ContactsList />
            </Content>
         </Layout>
      </Layout>
   )
}

export default ContactsPage