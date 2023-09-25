import { Card } from 'antd';
import { ReactNode } from 'react';

type CardItemProps = {
  children: ReactNode;
};

const CardItem = ({ children }: CardItemProps) => (
  <Card
    title='Upload cover image'
    type='inner'
    bodyStyle={{ padding: 0 }}
    style={{
      width: 595,
      height: 405,
      borderRadius: 20,
      boxShadow: '3px 3px 14px 0px rgba(190, 190, 190, 0.30)',
      overflow: 'hidden',
    }}
    headStyle={{
      background: '#D0F7FA',
      fontSize: '30px',
      fontWeight: 'bold',
    }}
  >
    {children}
  </Card>
);

export default CardItem;
