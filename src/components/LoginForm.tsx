import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../redux/hooks';
import { setCredentials } from '../redux/reducers/authReducer';
import { IUserCredentials } from '../interfaces/IUserCredentials';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   return (
      <Form
         name="login"
         style={{ width: 500 }}
         initialValues={{ remember: true }}
         onFinish={(values: IUserCredentials) => {
            dispatch(setCredentials(values))
            navigate('/')
         }}
         autoComplete="off"
         layout='vertical'
      >
         <Form.Item
            label="Login"
            name="login"
            rules={[{ required: true, message: 'Please input your username!' }]}
         >
            <Input />
         </Form.Item>

         <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
         >
            <Input.Password />
         </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit" style={{ boxShadow: 'none' }}>
               SIGN IN
            </Button>
         </Form.Item>
      </Form>
   )
}

export default LoginForm