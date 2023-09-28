import { Col, Row } from 'antd';
import './App.css';
import BreadcrumbItem from './components/BreadcrumbItem';
import ParentForm from './components/ParentForm';
import SideNav from './components/SideNav';
function App() {
  return (
    <main>
      <Row>
        <Col span={2}>
          <SideNav />
        </Col>
        <Col span={22}>
          <BreadcrumbItem />
          <ParentForm />
        </Col>
      </Row>
    </main>
  );
}

export default App;
