import Header from "../components/Header"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useState } from "react"
import ListarProdutos from "../components/ListarProdutos"

export default function Home () {
    
    const [camisasRockAndRoll, setCamisasRockAndRoll] = useState([
    {
        "nome": "Camiseta Line Drum ArtRock Infantil",
        "preco": 56,
        "desconto": 0.1,
        "tamanhos": ["P", "M", "G"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-line-drum-artrock-infantil-7bf62f4aa738ae1c55162620db9cde1d.jpg",
        "tecido": "algodão"
    }, 
    {
        "nome": "Camiseta Ozzy Osbourne Chemical EXG",
        "preco": 92,
        "desconto": 0.1,
        "tamanhos": ["G", "GG", "XGG"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-ozzy-osbourne-chemical-exg.jpg",
        "tecido": "algodão"  
    },
    {
       "nome": "Camiseta Star Wars Darth Vader Guitarra Chemical",
        "preco": 79,
        "desconto": 0.1,
        "tamanhos": ["PP", "M", "G"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-star-wars-darth-vader-guitarra-chemical.jpg",
        "tecido": "algodão"   
    },
    {
       "nome": "Camiseta Star Wars Darth Vader Guitarra Chemical",
        "preco": 79,
        "desconto": 0.1,
        "tamanhos": ["PP", "M", "G"],
        "imagem": "https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/camiseta-star-wars-darth-vader-guitarra-chemical.jpg",
        "tecido": "algodão"  
    }
])

    return (
        <>
            <Header/>
            <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            >
                <div>
                    <img className="imagem-carousel" src="https://i.ibb.co/YRWpZtN/allstar-frete-bannerdesk01-v01-43bc8d3a39ddb180f958bc1027f426f9.webp"></img>
                </div>
                <div>
                    <img className="imagem-carousel" src="https://i.ibb.co/MDdsC5T/bb-inverno-bannerdesk01-v04-fa1e25d35a3dfcc5bb9978cf7513a6af.webp"></img>
                </div>
                <div>
                    <img className="imagem-carousel" src="https://i.ibb.co/X5GVjx8/bb-celebre-bannerdesk02-v01-2-0574af1a4a7caf600252887373eedee8.webp"></img>
                </div>
            </Carousel>
            <ListarProdutos lista={camisasRockAndRoll}/>
        </>
    ) 
}