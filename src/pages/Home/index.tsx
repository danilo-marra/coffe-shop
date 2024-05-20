import imagemCafe from '../../assets/imagem-cafe.png'
import expressoTradicional from '../../assets/coffees/expresso-tradicional.png'
import expressoAmericano from '../../assets/coffees/expresso-americano.png'
import expressoCremoso from '../../assets/coffees/cremoso.png'
import expressoGelado from '../../assets/coffees/gelado.png'
import cafeComLeite from '../../assets/coffees/leite.png'
import latte from '../../assets/coffees/latte.png'
import cappucino from '../../assets/coffees/capuccino.png'
import macchiato from '../../assets/coffees/macchiato.png'
import mocaccino from '../../assets/coffees/mocaccino.png'
import chocolateQuente from '../../assets/coffees/chocolate-quente.png'
import cubano from '../../assets/coffees/cubano.png'
import havaiano from '../../assets/coffees/havaiano.png'
import arabe from '../../assets/coffees/arabe.png'
import irlandes from '../../assets/coffees/irlandes.png'
import {
  MapPin,
  ShoppingCartSimple,
  MapPinLine,
  Trash,
  CurrencyDollar,
  Timer,
  Package,
  Coffee,
  Plus,
  Minus,
  CreditCard,
  Money,
  Bank,
} from '@phosphor-icons/react'

export function Home() {
  return (
    <main className="mb-20">
      <section className="lg:flex">
        <div>
          <h1 className="text-2xl md:text-6xl text-title font-baloo2 font-extrabold text-center md:text-left">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="text-lg md:text-xl text-subtitle mt-5 text-center md:text-left ">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className="mt-16">
            <ul className="grid grid-cols-2 gap-4 text-text">
              <li className="flex items-center">
                <p className="bg-yellowDark rounded-full p-2 w-8 h-8 mr-2">
                  <ShoppingCartSimple
                    size={16}
                    weight="fill"
                    color="#FAFAFA"
                  ></ShoppingCartSimple>
                </p>
                <p>Compra Simples e segura</p>
              </li>

              <li className="flex items-center">
                <p className="bg-text rounded-full p-2 w-8 h-8 mr-2">
                  <Package size={16} weight="fill" color="#FAFAFA"></Package>
                </p>
                <p>Embalagem mantém o café intacto</p>
              </li>

              <li className="flex items-center">
                <p className="bg-yellow rounded-full p-2 w-8 h-8 mr-2">
                  <Timer size={16} weight="fill" color="#FAFAFA"></Timer>
                </p>
                <p>Entrega rápida e rastreada</p>
              </li>

              <li className="flex items-center">
                <p className="bg-purple rounded-full p-2 w-8 h-8 mr-2">
                  <Coffee size={16} weight="fill" color="#FAFAFA"></Coffee>
                </p>
                <p>O café chega fresquinho até você</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="mx-auto w-1/2 mt-10 md:w-auto lg:mt-0"
            src={imagemCafe}
            alt=""
          />
        </div>
      </section>
      <section className="shop mt-28">
        <h2 className="font-baloo2 text-title text-5xl text-center md:text-left">
          Nossos Cafés
        </h2>
        <div className="mt-14 flex flex-wrap justify-center lg:justify-start xl:justify-around gap-10">
          <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
            <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
              <img
                className="mx-auto"
                src={expressoTradicional}
                alt="Café Expresso Tradicional"
              />
            </div>
            <div className="text-center mt-24">
              <div className="my-6">
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  tradicional
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-baloo2 text-subtitle text-2xl px-2">
                Expresso Tradicional
              </h3>
              <p className="text-label px-2 mt-5 mb-10">
                O tradicional café feito com água quente e grãos moídos
              </p>
            </div>
            <div className="px-4 flex items-center justify-around">
              <div>
                <p className="text-subtitle text-sm">
                  R$<span className="font-baloo2 text-3xl ml-1">9,90</span>
                </p>
              </div>
              <div className="bg-button p-2 rounded-lg flex">
                <button>
                  <Minus />
                </button>
                <input
                  className="w-6 mx-1 bg-button text-center text-subtitle font-bold"
                  type="text"
                  placeholder="0"
                />
                <button>
                  <Plus />
                </button>
              </div>
              <div>
                <button className="bg-purpleDark p-2 rounded-lg">
                  <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
            <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
              <img
                className="mx-auto"
                src={expressoAmericano}
                alt="Expresso Americano"
              />
            </div>
            <div className="text-center mt-24">
              <div className="my-6">
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  tradicional
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-baloo2 text-subtitle text-2xl px-2">
                Expresso Americano
              </h3>
              <p className="text-label px-2 mt-5 mb-10">
                Expresso diluído, menos intenso que o tradicional
              </p>
            </div>
            <div className="px-4 flex items-center justify-around">
              <div>
                <p className="text-subtitle text-sm">
                  R$<span className="font-baloo2 text-3xl ml-1">9,90</span>
                </p>
              </div>
              <div className="bg-button p-2 rounded-lg flex">
                <button>
                  <Minus />
                </button>
                <input
                  className="w-6 mx-1 bg-button text-center text-subtitle font-bold"
                  type="text"
                  placeholder="0"
                />
                <button>
                  <Plus />
                </button>
              </div>
              <div>
                <button className="bg-purpleDark p-2 rounded-lg">
                  <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
            <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
              <img
                className="mx-auto"
                src={expressoCremoso}
                alt="Café Expresso Tradicional"
              />
            </div>
            <div className="text-center mt-24">
              <div className="my-6">
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  tradicional
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-baloo2 text-subtitle text-2xl px-2">
                Expresso Cremoso
              </h3>
              <p className="text-label px-2 mt-5 mb-10">
                Café expresso tradicional com espuma cremosa
              </p>
            </div>
            <div className="px-4 flex items-center justify-around">
              <div>
                <p className="text-subtitle text-sm">
                  R$<span className="font-baloo2 text-3xl ml-1">9,90</span>
                </p>
              </div>
              <div className="bg-button p-2 rounded-lg flex">
                <button>
                  <Minus />
                </button>
                <input
                  className="w-6 mx-1 bg-button text-center text-subtitle font-bold"
                  type="text"
                  placeholder="0"
                />
                <button>
                  <Plus />
                </button>
              </div>
              <div>
                <button className="bg-purpleDark p-2 rounded-lg">
                  <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
            <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
              <img
                className="mx-auto"
                src={expressoGelado}
                alt="Café Expresso Tradicional"
              />
            </div>
            <div className="text-center mt-24">
              <div className="my-6">
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  tradicional
                </span>
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  gelado
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-baloo2 text-subtitle text-2xl px-2">
                Expresso Gelado
              </h3>
              <p className="text-label px-2 mt-5 mb-10">
                O tradicional café feito com água quente e grãos moídos
              </p>
            </div>
            <div className="px-4 flex items-center justify-around">
              <div>
                <p className="text-subtitle text-sm">
                  R$<span className="font-baloo2 text-3xl ml-1">9,90</span>
                </p>
              </div>
              <div className="bg-button p-2 rounded-lg flex">
                <button>
                  <Minus />
                </button>
                <input
                  className="w-6 mx-1 bg-button text-center text-subtitle font-bold"
                  type="text"
                  placeholder="0"
                />
                <button>
                  <Plus />
                </button>
              </div>
              <div>
                <button className="bg-purpleDark p-2 rounded-lg">
                  <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
            <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
              <img
                className="mx-auto"
                src={cafeComLeite}
                alt="Café Expresso Tradicional"
              />
            </div>
            <div className="text-center mt-24">
              <div className="my-6">
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  tradicional
                </span>
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  com leite
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-baloo2 text-subtitle text-2xl px-2">
                Café com Leite
              </h3>
              <p className="text-label px-2 mt-5 mb-10">
                Meio a meio de expresso tradicional com leite vaporizado
              </p>
            </div>
            <div className="px-4 flex items-center justify-around">
              <div>
                <p className="text-subtitle text-sm">
                  R$<span className="font-baloo2 text-3xl ml-1">9,90</span>
                </p>
              </div>
              <div className="bg-button p-2 rounded-lg flex">
                <button>
                  <Minus />
                </button>
                <input
                  className="w-6 mx-1 bg-button text-center text-subtitle font-bold"
                  type="text"
                  placeholder="0"
                />
                <button>
                  <Plus />
                </button>
              </div>
              <div>
                <button className="bg-purpleDark p-2 rounded-lg">
                  <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
            <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
              <img
                className="mx-auto"
                src={latte}
                alt="Café Expresso Tradicional"
              />
            </div>
            <div className="text-center mt-24">
              <div className="my-6">
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  tradicional
                </span>
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  com leite
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-baloo2 text-subtitle text-2xl px-2">Latte</h3>
              <p className="text-label px-2 mt-5 mb-10">
                Uma dose de café expresso com o dobro de leite e espuma cremosa
              </p>
            </div>
            <div className="px-4 flex items-center justify-around">
              <div>
                <p className="text-subtitle text-sm">
                  R$<span className="font-baloo2 text-3xl ml-1">9,90</span>
                </p>
              </div>
              <div className="bg-button p-2 rounded-lg flex">
                <button>
                  <Minus />
                </button>
                <input
                  className="w-6 mx-1 bg-button text-center text-subtitle font-bold"
                  type="text"
                  placeholder="0"
                />
                <button>
                  <Plus />
                </button>
              </div>
              <div>
                <button className="bg-purpleDark p-2 rounded-lg">
                  <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
            <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
              <img
                className="mx-auto"
                src={cappucino}
                alt="Café Expresso Tradicional"
              />
            </div>
            <div className="text-center mt-24">
              <div className="my-6">
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  tradicional
                </span>
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  com leite
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-baloo2 text-subtitle text-2xl px-2">
                Capuccino
              </h3>
              <p className="text-label px-2 mt-5 mb-10">
                Bebida com canela feita de doses iguais de café, leite e espuma
              </p>
            </div>
            <div className="px-4 flex items-center justify-around">
              <div>
                <p className="text-subtitle text-sm">
                  R$<span className="font-baloo2 text-3xl ml-1">9,90</span>
                </p>
              </div>
              <div className="bg-button p-2 rounded-lg flex">
                <button>
                  <Minus />
                </button>
                <input
                  className="w-6 mx-1 bg-button text-center text-subtitle font-bold"
                  type="text"
                  placeholder="0"
                />
                <button>
                  <Plus />
                </button>
              </div>
              <div>
                <button className="bg-purpleDark p-2 rounded-lg">
                  <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
            <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
              <img
                className="mx-auto"
                src={macchiato}
                alt="Café Expresso Tradicional"
              />
            </div>
            <div className="text-center mt-24">
              <div className="my-6">
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  tradicional
                </span>
                <span className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2">
                  com leite
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-baloo2 text-subtitle text-2xl px-2">
                Macchiato
              </h3>
              <p className="text-label px-2 mt-5 mb-10">
                Café expresso misturado com um pouco de leite quente e espuma
              </p>
            </div>
            <div className="px-4 flex items-center justify-around">
              <div>
                <p className="text-subtitle text-sm">
                  R$<span className="font-baloo2 text-3xl ml-1">9,90</span>
                </p>
              </div>
              <div className="bg-button p-2 rounded-lg flex">
                <button>
                  <Minus />
                </button>
                <input
                  className="w-6 mx-1 bg-button text-center text-subtitle font-bold"
                  type="text"
                  placeholder="0"
                />
                <button>
                  <Plus />
                </button>
              </div>
              <div>
                <button className="bg-purpleDark p-2 rounded-lg">
                  <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
