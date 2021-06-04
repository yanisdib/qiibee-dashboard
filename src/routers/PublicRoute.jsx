import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicRoute({ component: Component, ...rest }) {
    const isAuthenticated = useSelector((state) => !!state.auth.email);
    return (
        <Route
            {...rest}
            component={(props) =>
                isAuthenticated ? <Redirect to='/dashboard' /> : <Component {...props} />
            }
        />
    );
}

export default PublicRoute;
