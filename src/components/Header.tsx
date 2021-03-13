import { Link } from "react-router-dom";
import '../style/HeaderStyle.css'
import '../style/CommonStyle.css'

const links = [
    {
        className: "Link",
        to: "/",
        label: "Home"
    },
    {
        className: "Link",
        to: "/about",
        label: "About"
    },
    {
        className: "Link",
        to: "/login",
        label: "Sign In"
    },
    {
        className: "Link",
        to: "/register",
        label: "Sign Up"
    }
]

export default function Header() {
    return(
        <div className="PositionRelative">
            <header className="HeaderContainer">
                {links.map((link, i)=>{
                    return (
                        <Link key={i} className={link.className} to={link.to}>{link.label}</Link>
                        );
                    })}
                <hr />
            </header>
        </div>
    );
}