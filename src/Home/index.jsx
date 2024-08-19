import Header from "../components/Header"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useState } from "react"
import ListarProdutos from "../components/ListarProdutos"

export default function Home () {
    
    const [camisasRockAndRoll, setCamisasRockAndRoll] = useState([{

    }])

    const [calcados, setCalcados] = useState([{

    }])

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
            dynamicHeight
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
            <ListarProdutos lista={calcados}/>
        </>
    ) 
}