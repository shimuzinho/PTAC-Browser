import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/ofertas">
                        Ofertas
                    </Link>
                </li>
                <li>
                    <Link to="/produtos">
                        Produtos
                    </Link>
                </li>
            </ul>
        </header>
    )
}