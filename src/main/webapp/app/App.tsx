import * as React from 'react';
import Main from './Main';
import AppStore, { IAppConfig } from 'app/store/AppStore';
import AuthenticationStore from 'app/store/AuthenticationStore';
import { Provider } from 'mobx-react';

type Stores = {
  appStore: AppStore;
  authenticationStore: AuthenticationStore;
};

class App extends React.Component {
  readonly stores: Stores = { appStore: new AppStore(), authenticationStore: new AuthenticationStore() };

  constructor(props: IAppConfig) {
    super(props);
  }

  public render() {
    return (
      <Provider {...this.stores}>
        <Main {...this.stores} />
      </Provider>
    );
  }
}

export default App;
