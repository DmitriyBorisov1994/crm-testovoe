import { Form, Input, InputNumber } from "antd";
import { IContact } from "../../interfaces/IContact";

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
   editing: boolean;
   dataIndex: string;
   title: any;
   inputType: 'number' | 'text';
   record: IContact;
   index: number;
   children: React.ReactNode;
}

export const EditableCell: React.FC<EditableCellProps> = ({
   editing,
   dataIndex,
   title,
   inputType,
   record,
   index,
   children,
   ...restProps
}) => {
   const inputNode = inputType === 'number' ? <InputNumber size="small" controls={false} /> : <Input size="small" />;

   return (
      <td {...restProps}>
         {editing ? (
            <Form.Item
               name={dataIndex}
               style={{ margin: 0 }}
               rules={[
                  {
                     required: true,
                     message: `Please Input ${title}!`,
                  },
               ]}
            >
               {inputNode}
            </Form.Item>
         ) : (
            children
         )}
      </td>
   );
};