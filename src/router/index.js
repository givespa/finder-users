import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NotFound from '../page/not-found';
import { routes } from './routes';

const RouterView = () => {
    return (
        <Router>
            <Switch>
                { routes.map(function (route) {
                    return (
                        <Route
                            key={Date.now()}
                            path={route.path}
                            exact={route.meta.exact}>
                            {route.component}
                        </Route>
                    )
                })}
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default RouterView;
