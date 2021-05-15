import Home from '../components/Home';
import NotFound from '../components/404NotFound';
import SignIn from '../features/authorization/component/SignIn';
import SignUp from '../features/authorization/component/SignUp';

export const paths = {
    signIn: {
        path: "/signIn",
        displayName: "Sign In"
    },
    signUp: {
        path: "/signUp",
        displayName: "Sign Up"
    },
    home: {
        path: "/",
        displayName: "Home"
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
        path: paths.signIn.path,
        component: SignIn
    },
    {
        path: paths.signUp.path,
        component: SignUp
    },
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
