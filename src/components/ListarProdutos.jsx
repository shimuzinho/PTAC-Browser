import { useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

export default function ListarProdutos({ lista }) {
  const [carrinho, setCarrinho] = useState([])

  const arrumarPreco = (valor, desconto) => {
    let valorNovo = valor - (valor * desconto)
    return valorNovo.toFixed(2)
  }

  const adicionarCarrinho = (produto) => {
    setCarrinho([produto, ...carrinho])
    toast(`${produto.nome} adicionado(a) ao carrinho`)
  }

  return (
    <main>
      <div className="sub-main">
      {
        lista.map(el =>
          <div className="container-produto" key={el.id}>
            <img className="imagem-produto" src={el.imagem}></img>
            <div className="container-descricao">
              <p>{el.nome}</p>
              {
                el.desconto != 0 ? (
                  <div className="preco-desconto">
                    <p className="preco">R$ {arrumarPreco(el.preco, el.desconto)}</p>
                    <p className="preco desconto">R$ {arrumarPreco(el.preco, 0)}</p>
                  </div>
                ) : (
                  <p className="preco">R$ {arrumarPreco(el.preco, 0)}</p>
                )
              }
            </div>
            <button className="botao-adicionar-carrinho" onClick={
              function () {
                adicionarCarrinho(el)
              }
            }>Adicionar</button>
          </div>
        )
      }
      </div>
      <ToastContainer />
    </main>
  )
}