import {
  HomeOutlined,
  MenuOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const SideNav = () => {
  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          background: '#ffffff',
          padding: 24,
          boxShadow: '0px 4px 23px 0px rgba(0, 0, 0, 0.05)',
          height: '100vh',
          position: 'sticky',
          zIndex: 100,
        }}
      >
        <Menu mode='inline' style={{ border: 'none' }}>
          <Menu.Item key='1'>
            <MenuOutlined style={{ fontSize: 22 }} />
          </Menu.Item>
          <Menu.Item key='2' style={{ marginTop: 95 }}>
            <HomeOutlined style={{ fontSize: 30 }} />
          </Menu.Item>
          <Menu.Item key='3'>
            <ScheduleOutlined style={{ fontSize: 30 }} />
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SideNav;
