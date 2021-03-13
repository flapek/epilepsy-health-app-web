import { Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import NotFound from './404NotFound';
import ForgetPassword from "./ForgetPassword";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
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
]

export default function Body() {
    return (
        <Switch>
            {routes.map(({path, component}, i)=>{
                return (
                    <Route exact key={i} path={path} component={component}/>
                );
            })}
        </Switch>
    );
}