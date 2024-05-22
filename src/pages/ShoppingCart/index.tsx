import expressoTradicional from '../../assets/coffees/expresso-tradicional.png'
import { useState } from 'react'
import {
  Minus,
  Plus,
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from '@phosphor-icons/react'

export function ShoppingCart() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <form className="mb-20 md:flex justify-evenly md:gap-x-10 xl:gap-x-0">
      <div className="md:w-[640px]">
        <h1 className="font-baloo2 text-title text-3xl mb-2 text-center md:text-left">
          Complete seu pedido
        </h1>
        <div className="bg-card rounded-md pb-10 mb-6">
          <div className="flex pt-8 px-8 mb-6">
            <div className="mr-2 mt-1">
              <MapPinLine color="#C47F17" size={22} />
            </div>
            <div>
              <h2 className="text-subtitle text-xl md:text-md">
                Endereço de Entrega
              </h2>
              <p className="text-text text-sm">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <div>
            <div className="md:ml-8 mb-3 flex mx-4">
              <input
                className="bg-input rounded-sm block w-full md:w-1/2  px-2 h-10 text-base text-text"
                type="text"
                placeholder="CEP"
              />
            </div>
            <div className="md:mx-8 mb-3 mx-4">
              <input
                className="bg-input rounded-sm block w-full  px-2 h-10 text-base text-text"
                type="text"
                placeholder="Rua"
              />
            </div>
            <div className="md:mx-8 mb-3 flex mx-4">
              <input
                className="bg-input rounded-sm w-2/4 md:w-[12.5rem] px-2 h-10 text-base text-text hide-number-controls mr-2"
                type="number"
                placeholder="Número"
              />
              <input
                className="bg-input rounded-sm w-full md:w-full px-2 h-10 text-base text-text"
                type="text"
                placeholder="Complemento (Opcional)"
              />
            </div>
            <div className="md:mx-8 md:flex mx-4">
              <input
                className="bg-input rounded-sm px-2 h-10 text-base w-full md:w-1/4 mb-2 md:mb-0"
                type="text"
                placeholder="Bairro"
              />
              <input
                className="bg-input rounded-sm px-2 h-10 text-base w-full md:w-2/4 mb-2 md:mb-0 md:mx-2"
                type="text"
                placeholder="Cidade"
              />
              <input
                className="bg-input rounded-sm px-2 h-10 text-base w-full md:w-1/4 mb-2 md:mb-0"
                type="text"
                placeholder="UF"
              />
            </div>
          </div>
        </div>
        <div className="bg-card rounded-md pb-10 mb-6">
          <div className="flex pt-8 px-8 mb-6">
            <div className="mr-2 mt-1">
              <CurrencyDollar color="#8047F8" size={22} />
            </div>
            <div>
              <h2 className="text-subtitle text-xl md:text-md">Pagamento</h2>
              <p className="text-text text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="md:flex justify-evenly">
            <div className="mx-4">
              <button className="bg-button p-3 rounded-md w-full flex items-center justify-center hover:bg-hover focus:bg-purpleLight active:bg-purpleLight focus:outline-none focus:ring-1 focus:ring-purple">
                <CreditCard color="#8047F8" />
                <p className="ml-3 uppercase text-text text-lg md:text-sm">
                  Cartão de Crédito
                </p>
              </button>
            </div>

            <div className="mx-4">
              <button className="bg-button p-3 rounded-md w-full justify-center flex items-center my-4 md:my-0 hover:bg-hover focus:bg-purpleLight active:bg-purpleLight focus:outline-none focus:ring-1 focus:ring-purple">
                <Bank color="#8047F8" />
                <p className="ml-3 uppercase text-text text-lg md:text-sm">
                  Cartão de Débito
                </p>
              </button>
            </div>

            <div className="mx-4">
              <button className="bg-button p-3 rounded-md w-full justify-center flex items-center hover:bg-hover focus:bg-purpleLight active:bg-purpleLight focus:outline-none focus:ring-1 focus:ring-purple">
                <Money color="#8047F8" />
                <p className="ml-3 uppercase text-text text-lg md:text-sm">
                  Dinheiro
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[448px]">
        <h1 className="font-baloo2 text-title text-3xl mb-2 text-center md:text-left">
          Cafés Selecionados
        </h1>

        <div className="bg-card rounded-md pb-10 mb-6 rounded-tr-3xl rounded-bl-3xl">
          <div className="pt-6">
            <div className="flex items-center justify-around">
              <div className="size-16">
                <img src={expressoTradicional} alt="Expresso Tradicional" />
              </div>
              <div>
                <p className="text-subtitle">Expresso Tradicional</p>
                <div className="flex items-center">
                  <div className="bg-button p-1 rounded-lg flex mr-2">
                    <button
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Minus color={isHovered ? '#4B2995' : '#8047F8'} />
                    </button>
                    <input
                      className="hide-number-controls bg-button text-center w-6 mx-1"
                      type="number"
                      placeholder="1"
                    />
                    <button
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Plus color={isHovered ? '#4B2995' : '#8047F8'} />
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center bg-button p-2 rounded-md hover:bg-hover focus:bg-purpleLight active:bg-purpleLight focus:outline-none focus:ring-1 focus:ring-purple">
                      <Trash color="#8047F8" />
                      <span className="ml-1 text-text uppercase text-sm md:text-md">
                        Remover
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-start">
                <p className="font-bold">R$ 9,90</p>
              </div>
            </div>
            <hr className="bg-button mx-4 my-6" />
          </div>

          <div className="mx-4">
            <div className="flex justify-between">
              <span>Total de Itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="flex justify-between">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
            <button className="bg-yellow text-white rounded-md uppercase font-bold p-3 block mx-auto w-full mt-4">
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
