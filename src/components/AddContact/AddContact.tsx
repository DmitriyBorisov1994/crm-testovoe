import { PlusOutlined } from '@ant-design/icons';
import { DatePicker, Form, Input, InputNumber, Modal } from 'antd';
import { useState, useCallback } from 'react'
import { IContact } from '../../interfaces/IContact';
import { useAppDispatch } from '../../redux/hooks';
import { addContact } from '../../redux/reducers/contactsReducer';
import dayjs from 'dayjs';
import './addContact.css'

const AddContact = () => {

   const [form] = Form.useForm();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const dispatch = useAppDispatch()

   const showModal = useCallback(() => {
      setIsModalOpen(true);
   }, [])

   const handleOk = useCallback(
      () => {
         form
            .validateFields()
            .then((values) => {
               form.resetFields();
               const yearEnd = dayjs(values.yearEnd).format('DD/MM/YYYY')
               const ard = dayjs(values.ard).format('DD/MM/YYYY')
               const newContact: IContact = {
                  ...values,
                  clientId: Math.ceil(Math.random() * 100), // заглушка
                  yearEnd,
                  ard,
               }
               dispatch(addContact(newContact))
               handleCancel()
            })
            .catch((info) => {
               console.log('Validate Failed:', info);
            });
      }, [])

   const handleCancel = useCallback(() => {
      setIsModalOpen(false);
   }, [])

   return (
      <>
         <button className='add_btn' onClick={showModal}><PlusOutlined />Add</button>
         <Modal title="Add Contact" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form form={form} size='small'>
               <Form.Item
                  label="Client Name"
                  name="clientName"
                  rules={[{ required: true, message: 'Please input client name!' }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="TRN/PPSN"
                  name="trn_ppsn"
                  rules={[{ required: true, message: 'Please input TRN/PPSN!' }]}
               >
                  <InputNumber controls={false} />
               </Form.Item>
               <Form.Item
                  label="Year End"
                  name="yearEnd"
                  rules={[{ required: true, message: 'Please input year end!' }]}
               >
                  <DatePicker format='DD/MM/YYYY' />
               </Form.Item>
               <Form.Item
                  label="ARD"
                  name="ard"
                  rules={[{ required: true, message: 'Please input ard!' }]}
               >
                  <DatePicker format='DD/MM/YYYY' />
               </Form.Item>
               <Form.Item
                  label="Company Number"
                  name="companyNumber"
                  rules={[{ required: true, message: 'Please input company number!' }]}
               >
                  <InputNumber controls={false} />
               </Form.Item>
               <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input Email!' }]}
               >
                  <Input type='email' />
               </Form.Item>
               <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[{ required: true, message: 'Please input phone number!' }]}
               >
                  <InputNumber controls={false} />
               </Form.Item>
               <Form.Item
                  label="Company Address"
                  name="companyAddress"
                  rules={[{ required: true, message: 'Please input company address!' }]}
               >
                  <Input />
               </Form.Item>
            </Form>
         </Modal>
      </>
   )
}

export default AddContact