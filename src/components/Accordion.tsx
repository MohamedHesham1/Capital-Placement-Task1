import { EditOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { ReactNode } from 'react';

const { Panel } = Collapse;

type AccordionProps = {
  children: ReactNode;
  questionType: string;
  questionTitle?: string;
};

const Accordion = ({
  children,
  questionType,
  questionTitle,
}: AccordionProps) => {
  return (
    <Collapse
      accordion
      style={{
        background: 'none',
      }}
      bordered={false}
    >
      <Panel
        header={
          <div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#979797',
              }}
            >
              {questionType}
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                {questionTitle}
              </div>
              <EditOutlined />
            </div>
          </div>
        }
        key='1'
        showArrow={false}
      >
        {children}
      </Panel>
    </Collapse>
  );
};

export default Accordion;
