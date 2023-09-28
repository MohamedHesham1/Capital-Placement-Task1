import {
  HomeOutlined,
  MenuOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const SideNav = () => {
  return (
    <Sider
      style={{
        background: '#ffffff',
        boxShadow: '0px 4px 23px 0px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Menu mode='inline' style={{ border: 'none', marginTop: '50px ' }}>
        <Menu.Item key='1'>
          <MenuOutlined style={{ fontSize: 22 }} />
        </Menu.Item>
        <Menu.Item key='2' style={{ marginTop: 95 }}>
          <HomeOutlined style={{ fontSize: 30 }} />
        </Menu.Item>
        <Menu.Item key='3' style={{ marginTop: 45 }}>
          <ScheduleOutlined style={{ fontSize: 30 }} />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
