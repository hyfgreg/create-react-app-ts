import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(({ location, action }) => {
  console.log('[history]', action, location);
});

export default history;
