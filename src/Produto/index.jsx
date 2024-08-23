import { useState } from "react"
import Header from "../components/Header"
import ListarProdutos from "../components/ListarProdutos"
import Footer from "../components/Footer"

export default function Produto () {

    const [produtosTotais, setProdutosTotais] = useState([{
        "id": 1,
        "nome": "Camiseta Line Drum ArtRock Infantil",
        "preco": 56,
        "desconto": 0.1,
        "tamanhos": ["P", "M", "G"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-line-drum-artrock-infantil-7bf62f4aa738ae1c55162620db9cde1d.jpg",
        "tecido": "algodão"
    },
    {
        "id": 2,
        "nome": "Camiseta Ozzy Osbourne Chemical EXG",
        "preco": 92,
        "desconto": 0.1,
        "tamanhos": ["G", "GG", "XGG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-ozzy-osbourne-chemical-exg.jpg",
        "tecido": "algodão"
    },
    {
        "id": 3,
        "nome": "Camiseta Star Wars Darth Vader Guitarra Chemical",
        "preco": 79,
        "desconto": 0.1,
        "tamanhos": ["PP", "M", "G"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-star-wars-darth-vader-guitarra-chemical.jpg",
        "tecido": "algodão"
    },
    {
        "id": 4,
        "nome": "Camiseta Nirvana In Utero Bomber Manga Longa",
        "preco": 99,
        "desconto": 0.25,
        "tamanhos": ["P", "M", "G"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-nirvana-in-utero-bomber-manga-longa.jpg",
        "tecido": "algodão"
    },
    {
        "id": 5,
        "nome": "Camiseta Slipknot Iowa Bomber",
        "preco": 89,
        "desconto": 0.1,
        "tamanhos": ["P", "M", "G", "GG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/514-slipknot.jpg",
        "tecido": "algodão"
    },
    {
        "id": 6,
        "nome": "Camiseta Feminina Janis Joplin Pearl Stamp Baby Look",
        "preco": 79,
        "desconto": 0.1,
        "tamanhos": ["P", "M", "G", "GG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-feminina-janis-joplin-pearl-stamp-baby-look.jpg",
        "tecido": "algodão"
    },
    {
        "id": 7,
        "nome": "Camiseta Harry Potter Hogwarts Mapa Chemical",
        "preco": 89,
        "desconto": 0.1,
        "tamanhos": ["PP", "P", "M", "G", "GG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/original/camiseta-harry-potter-hogwarts-mapa-chemical.jpg",
        "tecido": "algodão"
    },
    {
        "id": 8,
        "nome": "Camiseta Guns N' Roses Logo Bomber Juvenil",
        "preco": 64,
        "desconto": 0.1,
        "tamanhos": ["PP", "P", "M"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-guns-n-roses-juvenil.jpg",
        "tecido": "algodão"
    },
    {
        "id": 9,
        "nome": "Camiseta AC/DC For Those About To Rock Tour 1981 Chemical",
        "preco": 89,
        "desconto": 0.1,
        "tamanhos": ["P", "M", "G"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-ac-dc-for-those-about-to-rock-chemical.jpg",
        "tecido": "algodão"
    },
    {
        "id": 10,
        "nome": "Camiseta Arctic Monkeys AM Oficina do Rock",
        "preco": 79,
        "desconto": 0.1,
        "tamanhos": ["P", "M", "GG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/arctic-monkeys-024259.jpg",
        "tecido": "algodão"
    },
    {
        "id": 11,
        "nome": "Camiseta The Beatles Abbey Road Bomber Manga Longa",
        "preco": 99,
        "desconto": 0,
        "tamanhos": ["G", "GG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/original/camiseta-the-beatles-abbey-road-bomber-manga-longa.jpg",
        "tecido": "algodão"
    },
    {
        "id": 12,
        "nome": "Camiseta Iron Maiden Senjutsu Album Stamp",
        "preco": 89,
        "desconto": 0,
        "tamanhos": ["PP", "P", "G", "GG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/original/camiseta-iron-maiden-senjutsu-album-stamp-frente-01.jpg",
        "tecido": "algodão"
    },
    {
        "id": 13,
        "nome": "Camiseta Metallica And Justice For All Bomber Juvenil",
        "preco": 64,
        "desconto": 0,
        "tamanhos": ["PP", "P"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-metallica-and-justice-for-all-bomber-juvenil-15b659763f32ab6915522199618b8e91.jpg",
        "tecido": "algodão"
    },
    {
        "id": 14,
        "nome": "Camiseta Stitch Chemical",
        "preco": 89,
        "desconto": 0,
        "tamanhos": ["PP", "P", "M", "G", "GG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-stitch-chemical.jpg",
        "tecido": "algodão"
    },
    {
        "id": 15,
        "nome": "Mochila BTS Logos Monkless",
        "preco": 165,
        "desconto": 0,
        "tamanhos": false,
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/mochila-bts-logos-b075-a524f47887c5f35cba9df44f3774cb49.jpg",
        "tecido": "algodão"
    }
])

    return (
        <>
            <Header/>
            <p className="descricao-pagina">Todos os produtos:</p>
            <ListarProdutos lista={produtosTotais}/>
            <Footer/>
        </>
    )
}