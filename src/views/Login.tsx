import React from 'react';
import { History } from 'history';
import { observer, inject } from 'mobx-react';

interface IProps {
  history: History
  store: IAppStore
}

interface Login {
  props: IProps
}

@inject('store')
@observer
class Login extends React.Component {
  handleLogin = async () => {
    this.props.store.setUsername('xmov');
    this.props.history.push('/home');
  }
  render() {
    return (
      <button onClick={this.handleLogin}>登录</button>
    )
  }
}

export default Login;
