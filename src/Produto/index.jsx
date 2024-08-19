import { useState } from "react"
import Header from "../components/Header"

export default function Produto () {

    const [produtosTotais, setProdutosTotais] = useState([{
        
    }])

    return (
        <>
            <Header/>
            <h1>Produtos</h1>
        </>
    )
}