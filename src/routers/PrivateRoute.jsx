import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = useSelector((state) => !!state.auth.email);
    return (
        <Route
            {...rest}
            component={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
            }
        />
    );
}

export default PrivateRoute;
