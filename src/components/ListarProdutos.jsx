export default function ListarProdutos ({ lista }) {
  const arrumarPreco = (valor, desconto) => {
    let valorNovo = valor - (valor * desconto)
    return valorNovo.toFixed(2)
  }

  return (
    <main>
      {
        lista.map(el => 
          <div className="container-produto">
            <img className="imagem-produto" src={el.imagem}></img>
            <div className="container-descricao">
              <p>{el.nome}</p>
              <p className="preco">{arrumarPreco(el.preco, el.desconto)}</p>
            </div>
          </div>
        )
      }
    </main>
  )
}