import { Link } from 'react-router-dom';
import '../style/CommonStyle.css'
import '../style/LoginStyle.css'

export default function Login() {
    return (
    <div className="container">
        <div className="form-container">
            <form>
                <h1>Sing in</h1>
                <input type="text" placeholder="E-mail"/>
                <input type="password" placeholder="Password"/>
                <Link to="/forgetPassword">Forgot your password?</Link>
                <button>Sign in</button>
            </form>
        </div>
    </div>
    );
}