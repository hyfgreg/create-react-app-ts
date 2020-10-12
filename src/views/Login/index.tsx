import React from 'react';
import { History } from 'history';
import { observer, inject } from 'mobx-react';
import { Form, Input, Button, Typography } from 'antd';
import { REACT_APP_PROJECT_NAME } from 'env'
import api from './api'
import storage from 'utils/storage';

const { Title } = Typography

interface IProps {
  history: History
  store: IAppStore
}

interface Login {
  props: IProps
}

interface ILoginData {
  username: string;
  password: string;
}

@inject('store')
@observer
class Login extends React.Component {

  onFinish = async (data:ILoginData) => {
    const loginRes:ILooseObject = await api.login(data.username, data.password);
    
    if (loginRes.error_code) {
      console.error(loginRes.error_reason);
      return;
    }

    const user = { ...loginRes, username: data.username};
    storage.set(`${REACT_APP_PROJECT_NAME}__user`, user);
    
    this.props.store.setUser(user);

    this.props.history.push('/home')
  }

  onFinishFailed = (values:any) => {
    console.log("Fail", values);
  }

  render() {
    return (
      <div className="login">
        <Title level={3} style={{ textAlign: "center" }}>登陆</Title>
        <Form
          name="basic" 
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          > 
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login;
