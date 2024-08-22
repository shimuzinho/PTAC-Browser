export default function ListarProdutos ({ lista }) {
  return (
    <main>
      {
        lista.map(el => 
          <div className="container-produto">
            <img className="imagem-produto" src={el.imagem}></img>
            <div className="container-descricao">
              <p>{el.nome}</p>
              <p className="preco">{el.preco}</p>
            </div>
          </div>
        )
      }
    </main>
  )
}