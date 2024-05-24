import { useEffect, useState } from 'react'
import { CoffeeType } from '../Home/CoffeeCard'
import { SelectedCoffees } from './SelectedCoffees'

interface ConfirmOrderProps {
  selectedCoffees: CoffeeType[]
}

export function ConfirmOrder({ selectedCoffees }: ConfirmOrderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    setCoffees(selectedCoffees)
  }, [selectedCoffees])

  const handleRemoveCoffee = (coffeeId: string) => {
    const updatedCoffees = coffees.filter((coffee) => coffee.id !== coffeeId)
    setCoffees(updatedCoffees)
    localStorage.setItem('selectedCoffees', JSON.stringify(updatedCoffees))
  }

  return (
    <div className="md:w-[448px]">
      <h1 className="font-baloo2 text-title text-3xl mb-2 text-center md:text-left">
        Cafés Selecionados
      </h1>

      <div className="bg-card rounded-md pb-10 mb-6 rounded-tr-3xl rounded-bl-3xl">
        <SelectedCoffees
          onRemoveCoffee={handleRemoveCoffee}
          selectedCoffees={coffees}
        />

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
          <button
            type="submit"
            className="bg-yellow hover:bg-yellowDark text-white rounded-md uppercase font-bold p-3 block mx-auto w-full mt-4"
          >
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  )
}
