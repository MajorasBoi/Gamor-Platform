import { CustomButton } from '../CustomButton/CustomButton'
import './Navbar.css'

export const Navbar = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Streams</a></li>
                    <li><a href="#">Party</a></li>
                    <li><a href="#">Premium</a></li>
                </ul>
            </nav>
            <div className="navbar-center">
                <a href="/" className="navbar-title">⚛Gamor</a>
            </div>
            <div className="navbar-right">
                <CustomButton>Sign In</CustomButton>
                <CustomButton isRegisterButton={true}>Register</CustomButton>
            </div>
        </header>
    )
}
