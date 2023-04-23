import { EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons'
import { Space, Typography, Table, Form } from 'antd'
import { IContact } from '../../interfaces/IContact';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAllContacts } from '../../redux/selectors/contactsSelectors';
import { useMemo, useState, useCallback } from 'react';
import { DataType } from './DataType';
import { EditableCell } from './EditableCell';
import { contactsSorter } from '../../utils/contactsSorter';
import { deleteContact, editContact } from '../../redux/reducers/contactsReducer';
import AddContact from '../AddContact/AddContact';
import './contactsList.css'

const { Text } = Typography

const rowSelection = {
   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
   },
   getCheckboxProps: (record: IContact) => ({
      name: record.clientName,
   }),
};

const ContactsList = () => {

   const [form] = Form.useForm();

   const [editingKey, setEditingKey] = useState<React.Key>();

   const isEditing = (record: IContact) => record.clientId === editingKey;

   const contacts = useAppSelector(selectAllContacts)
   const dispatch = useAppDispatch()

   // Для отрисовки данных в таблице нужен атрибут key, примем его за clientId

   const dataTypeContacts = useMemo(() => {
      return contacts.map(contact => {
         const dataTypeContact = { ...contact, key: contact.clientId as React.Key }
         return dataTypeContact
      })
   }, [contacts])

   const columns = useMemo(() => ([
      {
         title: 'Client ID',
         dataIndex: 'clientId',
         key: 'clientId',
         sorter: {
            compare: (a: DataType, b: DataType) => contactsSorter(a, b, 'clientId')
         },
         editable: true
      },
      {
         title: 'Client Name',
         dataIndex: 'clientName',
         key: 'clientName',
         sorter: {
            compare: (a: DataType, b: DataType) => contactsSorter(a, b, 'clientName')
         },
         editable: true
      },
      {
         title: 'TRN/PPSN',
         dataIndex: 'trn_ppsn',
         key: 'trn_ppsn',
         sorter: {
            compare: (a: DataType, b: DataType) => contactsSorter(a, b, 'trn_ppsn')
         },
         editable: true
      },
      {
         title: 'Year End',
         dataIndex: 'yearEnd',
         key: 'yearEnd',
         editable: true
      },
      {
         title: 'ARD',
         dataIndex: 'ard',
         key: 'ard',
         editable: true
      },
      {
         title: 'Company Number',
         dataIndex: 'companyNumber',
         key: 'companyNumber',
         sorter: {
            compare: (a: DataType, b: DataType) => contactsSorter(a, b, 'companyNumber')
         },
         editable: true
      },
      {
         title: 'Email',
         dataIndex: 'email',
         key: 'email',
         sorter: {
            compare: (a: DataType, b: DataType) => contactsSorter(a, b, 'email')
         },
         editable: true
      },
      {
         title: 'Phone Number',
         dataIndex: 'phoneNumber',
         key: 'phoneNumber',
         sorter: {
            compare: (a: DataType, b: DataType) => contactsSorter(a, b, 'phoneNumber')
         },
         editable: true
      },
      {
         title: 'Company Address',
         dataIndex: 'companyAddress',
         key: 'companyAddress',
         sorter: {
            compare: (a: DataType, b: DataType) => contactsSorter(a, b, 'companyAddress')
         },
         editable: true
      },
      {
         title: 'Action',
         key: 'action',
         render: (_: any, record: DataType) => {
            const editable = isEditing(record);
            if (editable) {
               return (
                  <Space size="middle" >
                     <SaveOutlined onClick={() => save(record.key)} />
                     < CloseOutlined onClick={cancel} />
                  </Space>
               )
            } else
               return (
                  <Space size="middle" >
                     <EditOutlined onClick={() => edit(record)} />
                     < DeleteOutlined onClick={() => onDeleteContact(record.clientId)} />
                  </Space>
               )
         },
      },
   ]), [isEditing]);

   // мержим необходимые данные для редактирования внутри таблицы (согласно доке Ant Design)

   const mergedColumns = useMemo(() => columns.map((col) => {
      if (!col.editable) {
         return col;
      }
      return {
         ...col,
         onCell: (record: DataType) => ({
            record,
            inputType: col.dataIndex === ('clientId' || 'companyNumber' || 'trn_ppsn' || 'phoneNumber') ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
         }),
      };
   }), [columns, isEditing])

   // Функционал для Actions

   const edit = useCallback((record: Partial<DataType>) => {
      form.setFieldsValue({ ...record });
      setEditingKey(record.key);
   }, [])

   const cancel = useCallback(() => {
      setEditingKey(undefined);
   }, []);

   const onDeleteContact = useCallback((id: number) => {
      dispatch(deleteContact(id))
   }, []);

   const save = useCallback(async (key: React.Key) => {
      const contactKey = key as number // временно
      try {
         const row = (await form.validateFields()) as IContact;
         dispatch(editContact({ data: row, key: contactKey }))
         setEditingKey('');
      } catch (errInfo) {
         console.log('Validate Failed:', errInfo);
      }
   }, []);

   return (
      <Space direction='vertical' className='contacts-list-wrapper' size='large'>
         <div className='contacts-list-subheader'>
            <Text>Total Contacts</Text>
            <AddContact />
         </div>
         <Form form={form} component={false}>
            <Table
               components={{
                  body: {
                     cell: EditableCell,
                  },
               }}
               columns={mergedColumns}
               rowSelection={{
                  type: 'checkbox',
                  ...rowSelection,
               }}
               dataSource={dataTypeContacts}
               scroll={{ x: true }}
            />
         </Form>
      </Space>
   )
}

export default ContactsList