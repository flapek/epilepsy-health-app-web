import { Switch, Route } from "react-router-dom";
import { routes } from '../common/Common'
import '../style/CommonStyle.css'

export default function Body() {
    return (
        <div className="container">
            <Switch>
                {routes.map(({path, component}, i)=>{
                    return (
                        <Route exact key={i} path={path} component={component}/>
                        );
                    })}
            </Switch>
        </div>
    );
}