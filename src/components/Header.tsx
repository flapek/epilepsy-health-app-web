import { Link } from "react-router-dom";
import { links } from  '../common/Common'
import '../style/HeaderStyle.css'
import '../style/CommonStyle.css'

export default function Header() {
    return(
        <div className="position-relative">
            <header className="header-container">
                <nav className="d-flex">
                    {links.map((link, i)=>{
                        return (
                            <Link key={i} className="nav-item" to={link.to}>{link.label}</Link>
                        );
                    })}
                </nav>
            </header>
        </div>
    );
}