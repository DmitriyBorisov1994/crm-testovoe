import React from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
   ContactsOutlined,
   CalendarOutlined,
   IssuesCloseOutlined
} from '@ant-design/icons';
import './appSidebar.css'

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
   label: React.ReactNode,
   key: React.Key,
   icon?: React.ReactNode,
   children?: MenuItem[],
): MenuItem => (
   {
      key,
      icon,
      children,
      label,
   } as MenuItem
)


const items: MenuItem[] = [
   getItem('Total Contacts', '1', <ContactsOutlined />),
   getItem('Calendar', '2', <CalendarOutlined />),
   getItem('Project Report', '3', <IssuesCloseOutlined />),
];

const AppSidebar = () => {
   return (
      <Menu
         theme="light"
         defaultSelectedKeys={['1']}
         mode="inline"
         items={items}
         className='sidebar-menu'
      />
   )
}

export default AppSidebar