import { Card, Form } from 'antd';
import { ReactNode } from 'react';

type CardItemProps = {
  children: ReactNode;
  title: string;
  padding?: string | number;
  marginBottom?: string | number;
  formItemName?: string;
};

const CardItem = ({
  children,
  title,
  padding = 0,
  marginBottom = 0,
  formItemName,
}: CardItemProps) => (
  <Form.Item name={formItemName}>
    <Card
      title={title}
      type='inner'
      bodyStyle={{ padding }}
      style={{
        width: 595,
        borderRadius: 20,
        boxShadow: '3px 3px 14px 0px rgba(190, 190, 190, 0.30)',
        overflow: 'hidden',
        marginBottom: marginBottom,
      }}
      headStyle={{
        background: '#D0F7FA',
        fontSize: 25,
        fontWeight: 'bold',
        height: 93,
      }}
    >
      {children}
    </Card>
  </Form.Item>
);

export default CardItem;
