import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './layout/Loader'
import ScrollToTop from './layout/ScrollToTop';
import routes from "../routes/auth";

const AdminLayout = React.lazy(() =>  import('./layout/AdminLayout'));

class App extends Component {
    render() {
        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });

        return (
            <>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                            <Route path="/" component={AdminLayout} />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </>
        );
    }
}

export default App;
