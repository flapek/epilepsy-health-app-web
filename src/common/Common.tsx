import Notes from '../components/pages/Notes';
import NotFound from '../components/404NotFound';
import SignIn from '../features/authorization/component/SignIn';
import SignUp from '../features/authorization/component/SignUp';
import Dashboard from "../components/pages/Dashboard";

export const paths = {
    signIn: {
        path: "/signIn",
        displayName: "Sign In"
    },
    signUp: {
        path: "/signUp",
        displayName: "Sign Up"
    },
    notes: {
        path: "/notes",
        displayName: "Notes"
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
        path: paths.notes.path,
        component: Notes
    },
    {
        path: paths.dashboard.path,
        component: Dashboard
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
