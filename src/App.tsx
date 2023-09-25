import { Col, Row } from 'antd';
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
        </Col>
      </Row>
    </main>
  );
}

export default App;
