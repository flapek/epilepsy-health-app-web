import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/404NotFound';

export const paths = {
    home: {
        path: "/",
        displayName: "Home"
    },
    login: {
        path: "/login",
        displayName: "Login"
    },
    dashboard: {
        path: "/dashboard",
        displayName: "Dashboard"
    },
    account: {
        path: "/account",
        displayName: "Account"
    },
    notFound: {
        path: "*",
        displayName: "Not found"
    },
}

export const routes = [
    {
        path: paths.home.path,
        component: Home
    },
    {
        path: paths.dashboard.path,
        component: NotFound
    },
    {
        path: paths.account.path,
        component: NotFound
    },
    {
        path: paths.notFound.path,
        component: NotFound
    }
];
