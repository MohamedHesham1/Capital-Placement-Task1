import { Checkbox, Divider, Form, Switch } from 'antd';
import CardItem from './CardItem';

const PersonalInfoCard = () => {
  return (
    <CardItem title='Personal Information' padding={'38px 48px 52px 30px'}>
      <Form.Item
        name={['personalInformation', 'firstName']}
        initialValue={{
          internalUse: false,
          show: true,
        }}
        label='First Name'
      />
      <Divider style={{ borderWidth: 2 }} />

      <Form.Item
        name={['personalInformation', 'lastName']}
        initialValue={{
          internalUse: false,
          show: true,
        }}
        label='Last Name'
      />
      <Divider style={{ borderWidth: 2 }} />

      <Form.Item
        name={['personalInformation', 'emailId']}
        initialValue={{
          internalUse: false,
          show: true,
        }}
        label='Email'
      />
      <Divider style={{ borderWidth: 2 }} />

      <Form.Item
        label={
          <span>
            Phone
            <span style={{ fontSize: 15, fontWeight: 400 }}>
              {' '}
              (without dial code)
            </span>
          </span>
        }
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 57 }}>
          <Form.Item
            name={['personalInformation', 'phoneNumber', 'internalUse']}
            valuePropName='checked'
            initialValue={false}
          >
            <Checkbox>Internal</Checkbox>
          </Form.Item>
          <div style={{ display: 'flex', gap: 17 }}>
            <Form.Item
              name={['personalInformation', 'phoneNumber', 'show']}
              valuePropName='checked'
              initialValue={true}
            >
              <Switch />
            </Form.Item>
            <span>Hide</span>
          </div>
        </div>
      </Form.Item>
      <Divider style={{ borderWidth: 2 }} />

      <Form.Item label='Nationality'>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 57 }}>
          <Form.Item
            name={['personalInformation', 'nationality', 'internalUse']}
            valuePropName='checked'
            initialValue={false}
          >
            <Checkbox>Internal</Checkbox>
          </Form.Item>
          <div style={{ display: 'flex', gap: 17 }}>
            <Form.Item
              name={['personalInformation', 'nationality', 'show']}
              valuePropName='checked'
              initialValue={true}
            >
              <Switch />
            </Form.Item>
            <span>Hide</span>
          </div>
        </div>
      </Form.Item>
      <Divider style={{ borderWidth: 2 }} />

      <Form.Item label='Current Residence'>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 57 }}>
          <Form.Item
            name={['personalInformation', 'currentResidence', 'internalUse']}
            valuePropName='checked'
            initialValue={false}
          >
            <Checkbox>Internal</Checkbox>
          </Form.Item>
          <div style={{ display: 'flex', gap: 17 }}>
            <Form.Item
              name={['personalInformation', 'currentResidence', 'show']}
              valuePropName='checked'
              initialValue={true}
            >
              <Switch />
            </Form.Item>
            <span>Hide</span>
          </div>
        </div>
      </Form.Item>
      <Divider style={{ borderWidth: 2 }} />

      <Form.Item label='ID Number'>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 57 }}>
          <Form.Item
            name={['personalInformation', 'idNumber', 'internalUse']}
            valuePropName='checked'
            initialValue={false}
          >
            <Checkbox>Internal</Checkbox>
          </Form.Item>
          <div style={{ display: 'flex', gap: 17 }}>
            <Form.Item
              name={['personalInformation', 'idNumber', 'show']}
              valuePropName='checked'
              initialValue={true}
            >
              <Switch />
            </Form.Item>
            <span>Hide</span>
          </div>
        </div>
      </Form.Item>
      <Divider style={{ borderWidth: 2 }} />

      <Form.Item label='Date of Birth'>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 57 }}>
          <Form.Item
            name={['personalInformation', 'dateOfBirth', 'internalUse']}
            valuePropName='checked'
            initialValue={false}
          >
            <Checkbox>Internal</Checkbox>
          </Form.Item>
          <div style={{ display: 'flex', gap: 17 }}>
            <Form.Item
              name={['personalInformation', 'dateOfBirth', 'show']}
              valuePropName='checked'
              initialValue={true}
            >
              <Switch />
            </Form.Item>
            <span>Hide</span>
          </div>
        </div>
      </Form.Item>
      <Divider style={{ borderWidth: 2 }} />

      <Form.Item label='Gender'>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 57 }}>
          <Form.Item
            name={['personalInformation', 'gender', 'internalUse']}
            valuePropName='checked'
            initialValue={false}
          >
            <Checkbox>Internal</Checkbox>
          </Form.Item>
          <div style={{ display: 'flex', gap: 17 }}>
            <Form.Item
              name={['personalInformation', 'gender', 'show']}
              valuePropName='checked'
              initialValue={true}
            >
              <Switch />
            </Form.Item>
            <span>Hide</span>
          </div>
        </div>
      </Form.Item>
      <Divider style={{ borderWidth: 2 }} />
    </CardItem>
  );
};

export default PersonalInfoCard;
