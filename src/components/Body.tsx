import { Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import NotFound from './404NotFound';

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
        path: "*",
        component: NotFound
    }
]

export default function Body() {
    return (
        <Switch>
            {routes.map((route, i)=>{
                return (
                    <Route key={i} path={route.path} render={() => (
                        <route.component />
                    )}/>
                );
            })}
        </Switch>
    );
}