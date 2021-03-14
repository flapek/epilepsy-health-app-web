import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/Login';
import Register from '../components/Register';
import NotFound from '../components/404NotFound';
import Dashboards from '../components/Dashboards';
import ForgetPassword from "../components/ForgetPassword";

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/dashboards",
        component: Dashboards
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/forgetPassword",
        component: ForgetPassword
    },
    {
        path: "*",
        component: NotFound
    }
];

export const links = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/dashboards",
        label: "Dashboards"
    },
    {
        to: "/about",
        label: "About"
    },
    {
        to: "/login",
        label: "Sign In"
    },
    {
        to: "/register",
        label: "Sign Up"
    },
    {
        to: "/account",
        label: "Account"
    }
];