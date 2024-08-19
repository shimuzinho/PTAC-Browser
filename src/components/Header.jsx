import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

export default function Header () {
    return (
        <header>
            <Link to="/">
                <img className="logo" src={logo}></img>
            </Link>
            <ul className="navegacao">
                <Link to="/produtos">
                    <li>Produtos</li>
                </Link>
                <Link to="/ofertas">
                    <li>Ofertas</li>
                </Link>
            </ul>
        </header>
    )
}