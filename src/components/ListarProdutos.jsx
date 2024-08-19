export default function ListarProdutos ({ lista }) {
  return (
    <>
      {
        lista.map(el => 
          <div>
            <img src={el.imagem}></img>
            <div>
              <p>{el.nome}</p>
              <p>{el.preco}</p>
            </div>
          </div>
        )
      }
    </>
  )
}