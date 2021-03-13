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
        // <Switch>
        //   <Route exact path="/">
        //     <Home />
        //   </Route>
        //   <Route path="/about">
        //     <About />
        //   </Route>
        //   <Route path="/login">
        //     <Login />
        //   </Route>
        //   <Route path="/register">
        //     <Register />
        //   </Route>
        //   <Route path="*">
        //     <NotFound />
        //   </Route>
        // </Switch> 
        <Switch>
            {routes.map((route, i)=>{
                if (i===1)
                    return (
                        <Route key={i} path={route.path} exact>
                            {route.component}
                        </Route>
                    );
                else
                    return (
                        <Route key={i} path={route.path}>
                            {route.component}
                        </Route>
                    );
            })}
        </Switch>
    );
}