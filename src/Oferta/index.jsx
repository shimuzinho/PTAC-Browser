import Header from "../components/Header"
import { useState } from "react"

export default function Oferta () {

    const [produtosOfertas, setProdutosOfertas] = useState([{
        
    }])

    return (
        <>
            <Header/>
            <h1>Ofertas</h1>
        </>
    )
}