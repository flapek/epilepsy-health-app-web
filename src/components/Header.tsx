import { Link } from "react-router-dom";
import '../style/HeaderStyle.css'
import '../style/CommonStyle.css'

const links = [
    {
        to: "/",
        label: "Home"
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
]

export default function Header() {
    return(
        <div className="PositionRelative">
            <header className="HeaderContainer">
                <nav className="d-flex">
                    {links.map((link, i)=>{
                        return (
                            <Link key={i} className="NavItem" to={link.to}>{link.label}</Link>
                        );
                    })}
                </nav>
            </header>
        </div>
    );
}