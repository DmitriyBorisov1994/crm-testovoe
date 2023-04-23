import { Input, Avatar, Typography, Space } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import './appHeader.css'

const { Text } = Typography

const AppHeader = () => {
   return (
      <>
         <Input
            addonBefore={<SearchOutlined />}
            placeholder="Search..."
            allowClear
            style={{ width: 304 }}
         />
         <Space direction='horizontal' size='large' align='center'>
            <Avatar size={54} icon={<UserOutlined />} />
            <div className='avatar-text-wrapper'>
               <Text className='avatar-text-height-fix' style={{ fontSize: '22px' }}>Mr. Director</Text>
               <Text className='avatar-text-height-fix' style={{ fontSize: '13px' }}>Managing Director</Text>
            </div>
         </Space>
      </>
   )
}

export default AppHeader