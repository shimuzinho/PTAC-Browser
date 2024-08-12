import Header from "../components/Header"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default function Home () {
    
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
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-05/1077_maratona_full_exclusivos.png"></img>
                </div>
                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-05/1077_maratona_full_exclusivos.png"></img>
                </div>
                <div>
                    <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-05/1077_maratona_full_exclusivos.png"></img>
                </div>
            </Carousel>
            <h1>Minha Casinha</h1>
        </>
    ) 
}