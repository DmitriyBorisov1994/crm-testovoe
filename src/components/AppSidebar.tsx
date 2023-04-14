import React from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
   ContactsOutlined,
   CalendarOutlined,
   IssuesCloseOutlined
} from '@ant-design/icons';

const AppSidebar = () => {

   type MenuItem = Required<MenuProps>['items'][number];

   function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
   ): MenuItem {
      return {
         key,
         icon,
         children,
         label,
      } as MenuItem;
   }

   const items: MenuItem[] = [
      getItem('Total Contacts', '1', <ContactsOutlined />),
      getItem('Calendar', '2', <CalendarOutlined />),
      getItem('Project Report', '3', <IssuesCloseOutlined />),
   ];

   return (
      <Menu
         theme="light"
         defaultSelectedKeys={['1']}
         mode="inline"
         items={items}
         style={
            {
               display: 'flex',
               flex: 1,
               flexDirection: 'column',
               gap: '10px'
            }
         }
      />
   )
}

export default AppSidebar