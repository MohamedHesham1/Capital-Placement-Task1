import { Button, Form } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PersonalInfoCard from './PersonalInfoCard';
import UploadCard from './UploadCard';

const ParentForm = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({});
  const formId = uuidv4();

  const onFinish = (values) => {
    setFormValues({
      data: {
        id: formId,
        type: 'applicationForm',
        attributes: {
          ...values,
        },
      },
    });
  };
  console.log('formValues ', formValues);

  return (
    <div className='container' style={{ marginLeft: 170, marginTop: 115 }}>
      <Form
        form={form}
        name='application-form'
        onFinish={onFinish}
        style={{ maxWidth: 517 }}
        colon={false}
      >
        <UploadCard />
        <PersonalInfoCard />

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ParentForm;
