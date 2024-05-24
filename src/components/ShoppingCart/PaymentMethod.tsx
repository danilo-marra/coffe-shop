import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { UseFormSetValue } from 'react-hook-form'
import { Inputs } from '../ShoppingCart/types'

interface PaymentMethodProps {
  setValue: UseFormSetValue<Inputs>
}

export function PaymentMethod({ setValue }: PaymentMethodProps) {
  return (
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
          <button
            type="button" // Prevenir submit
            className="bg-button p-3 rounded-md w-full flex items-center justify-center hover:bg-hover focus:bg-purpleLight active:bg-purpleLight focus:outline-none focus:ring-1 focus:ring-purple"
            onClick={() => setValue('paymentMethod', 'credit')}
          >
            <CreditCard color="#8047F8" />
            <p className="ml-3 uppercase text-text text-lg md:text-sm">
              Cartão de Crédito
            </p>
          </button>
        </div>

        <div className="mx-4">
          <button
            type="button" // Prevenir submit
            className="bg-button p-3 rounded-md w-full justify-center flex items-center my-4 md:my-0 hover:bg-hover focus:bg-purpleLight active:bg-purpleLight focus:outline-none focus:ring-1 focus:ring-purple"
            onClick={() => setValue('paymentMethod', 'debit')}
          >
            <Bank color="#8047F8" />
            <p className="ml-3 uppercase text-text text-lg md:text-sm">
              Cartão de Débito
            </p>
          </button>
        </div>

        <div className="mx-4">
          <button
            type="button" // Prevenir submit
            className="bg-button p-3 rounded-md w-full justify-center flex items-center hover:bg-hover focus:bg-purpleLight active:bg-purpleLight focus:outline-none focus:ring-1 focus:ring-purple"
            onClick={() => setValue('paymentMethod', 'money')}
          >
            <Money color="#8047F8" />
            <p className="ml-3 uppercase text-text text-lg md:text-sm">
              Dinheiro
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
