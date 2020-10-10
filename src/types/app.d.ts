type ILooseObject = {
  [key: string]: any;
};

interface IRoute {
  path: string
  key: string
  exact?: boolean
  redirect?: string
  component?: React.LazyExoticComponent
}

interface IMenu {
  path: string
  key: string
  name: string
}

interface IHistoryProps {
  history: History
}

interface IAppStore {
  username: string
  setUsername: (username: string) => void
}

interface IAuthLoginResponse {
  user_id: number;
  key: string;
  expire_time: string;
  expire_in: number;
  session_id: string;
}