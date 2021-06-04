import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

import App from '../App';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AuthenticationPage from '../components/Pages/AuthenticationPage/AuthenticationPage';
import LoginForm from '../components/Pages/AuthenticationPage/LoginForm/LoginForm';
import SignupForm from '../components/Pages/AuthenticationPage/SignupForm/SignupForm';
import DashboardPage from '../components/Pages/DashboardPage/DashboardPage';

export default function AppRouter() {
    let history = useHistory();
    return (
        <Router history={history}>
            <main>
                <Switch>
                    <Route exact component={App} path="/" />
                    <PrivateRoute component={DashboardPage} path="/dashboard" />
                    <>
                        <AuthenticationPage>
                            <PublicRoute component={LoginForm} path="/login" />
                            <PublicRoute component={SignupForm} path="/signup" />
                        </AuthenticationPage>
                    </>
                </Switch>
            </main>
        </Router>
    );
}
