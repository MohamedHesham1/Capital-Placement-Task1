import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Accordion from './Accordion';

const FormList = () => {
  const formId = uuidv4();
  const [questionType, setQuestionType] = useState('');
  const [questionTitle, setQuestionTitle] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const handleChange = (value) => {
    setQuestionType(value);
    console.log(value);
  };
  const handleTitleChange = (event) => {
    setQuestionTitle(event.target.value);
  };

  const paragraphQuestion = (
    <Accordion questionType={questionType} questionTitle={questionTitle}>
      <div>test</div>
    </Accordion>
  );

  return (
    <>
      <Form.List
        name={['personalInformation', 'personalQuestions']}
        initialValue={[]}
      >
        {(fields, { add, remove }) => (
          <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
            {fields.map((field) => (
              <div key={field.key}>
                <Form.Item
                  label='Type'
                  name={[field.name, 'type']}
                  labelCol={{ span: 24 }}
                  hidden={isHidden}
                  rules={[{ required: true, message: 'Please select a type' }]}
                >
                  <Select
                    value={questionType}
                    style={{
                      height: 68,
                      fontWeight: 500,
                      color: '#979797',
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: 'paragraph',
                        label: 'Paragraph',
                      },
                      {
                        value: 'shortAnswer',
                        label: 'Short answer',
                      },
                      {
                        value: 'yes/no',
                        label: 'Yes/No',
                      },
                      {
                        value: 'dropdown',
                        label: 'Dropdown',
                      },
                      {
                        value: 'multipleChoice',
                        label: 'Multiple choice',
                      },
                      {
                        value: 'date',
                        label: 'Date',
                      },
                      {
                        value: 'number',
                        label: 'Number',
                      },
                      {
                        value: 'fileUpload',
                        label: 'File upload',
                      },
                      {
                        value: 'videoQuestion',
                        label: 'Video question',
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  label='Question'
                  name={[field.name, 'question']}
                  labelCol={{ span: 24 }}
                >
                  <Input
                    value={questionTitle}
                    onChange={handleTitleChange}
                    placeholder='type here'
                    style={{
                      height: 68,
                    }}
                  />
                </Form.Item>

                {
                  // questionType === 'paragraph' ? paragraphQuestion
                  // : questionType === 'shortAnswer' ?  shortAnswerQuestion
                  // : questionType === 'yes/no' ? yesNoQuestion
                  // : questionType === 'dropdown' ? dropdownQuestion
                  // : questionType === 'multipleChoice' ? multipleChoiceQuestion
                  // : questionType === 'date' ? dateQuestion
                  // : questionType === 'number' ? numberQuestion
                  // : questionType === 'fileUpload' ? fileUploadQuestion
                  // : questionType === 'videoQuestion' ? videoQuestion
                  // : null
                }

                <Space size={304}>
                  <Button
                    icon={<CloseOutlined />}
                    type='text'
                    danger
                    onClick={() => remove(field.name)}
                  >
                    Delete question
                  </Button>

                  <Button
                    type='primary'
                    onClick={() => {
                      questionType && setIsHidden(!isHidden);
                    }}
                  >
                    Save
                  </Button>
                </Space>
              </div>
            ))}

            <Button
              icon={<PlusOutlined style={{ fontSize: 20 }} />}
              type='dashed'
              style={{
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                padding: 0,
              }}
              onClick={() => add({ id: formId, type: '', question: '' })}
            >
              Add a question
            </Button>
          </div>
        )}
      </Form.List>
    </>
  );
};

export default FormList;
