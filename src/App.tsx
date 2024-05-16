import coffeLogo from './assets/logo.svg'
import imagemCafe from './assets/imagem-cafe.png'
import expressoTradicional from './assets/coffees/expresso-tradicional.png'

export function App() {
  return (
    <div>
      <header>
        <div>
          <img src={coffeLogo} alt="logo coffe-shop" className="w-[18rem]" />
        </div>
        <div>
          <button>
            <span>Icone Localizacao</span> Porte Alegre, RS
          </button>
        </div>
        <div>
          <button>
            <span>Icone carrinho de compras</span>
          </button>
        </div>
      </header>
      <main>
        <section className="hero">
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <div>
              <ul>
                <li>
                  <span>Icone Carrinho de Compras</span>Compra Simples e segura
                </li>
                <li>
                  <span>Icone Relógio</span>Entrega rápida e rastreada
                </li>
                <li>
                  <span>Icone Embalagem</span>Embalagem mantém o café intacto
                </li>
                <li>
                  <span>Icone Café</span>O café chega fresquinho até você
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={imagemCafe} alt="" />
          </div>
        </section>
        <section className="shop">
          <div>
            <h2>Nosso Cafés</h2>
            <div>
              <div>
                <img
                  src={expressoTradicional}
                  alt="Café Expresso Tradicional"
                />
                <span>tradicional</span>
              </div>
              <div>
                <h3>Expresso Tradicional</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>
              </div>
              <div>
                <div>
                  <p>
                    R$<span>9,90</span>
                  </p>
                </div>
                <div>
                  <button>
                    <span>-</span>1<span>+</span>
                  </button>
                  <button>
                    <span>Icone carrinho</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
