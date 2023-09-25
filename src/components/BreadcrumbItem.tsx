import { Layout, Menu } from 'antd';

const { Header } = Layout;

const BreadcrumbItem = () => {
  return (
    <Layout
      className='layout'
      style={{
        marginTop: 123,
      }}
    >
      <Header
        style={{
          background: '#ffffff',
        }}
      >
        <Menu
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ display: 'flex', justifyContent: 'flex-start', gap: 120 }}
        >
          <Menu.Item key='1'>Program Details</Menu.Item>
          <Menu.Item key='2'>Application Form</Menu.Item>
          <Menu.Item key='3'>Workflow</Menu.Item>
          <Menu.Item key='4'>Preview</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default BreadcrumbItem;
