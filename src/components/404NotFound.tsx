import { useLocation } from "react-router-dom";
import '../style/404NotFoundStyle.css'

export default function NotFound() {
    let location = useLocation();
  
    return (
    <div className="NotFound">
        <h2>404</h2>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
    );
}