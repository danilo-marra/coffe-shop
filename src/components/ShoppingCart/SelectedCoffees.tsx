import { useState } from 'react'
import { Minus, Plus, Trash } from '@phosphor-icons/react'

interface CoffeeType {
  id: string
  img: string
  alt: string
  tags: Array<string>
  title: string
  description: string
  price: number
  count: number
}

interface SelectedCoffeeProps {
  selectedCoffees: CoffeeType[]
  onRemoveCoffee: (coffeeId: string) => void
}

export function SelectedCoffees({
  selectedCoffees,
  onRemoveCoffee,
}: SelectedCoffeeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const [counts, setCounts] = useState(
    selectedCoffees.reduce(
      (acc, coffee) => {
        acc[coffee.id] = coffee.count || 0
        return acc
      },
      {} as Record<string, number>,
    ),
  )

  const handleAddItem = (coffeeId: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [coffeeId]: (prevCounts[coffeeId] || 0) + 1,
    }))
  }

  const handleDecreaseItem = (coffeeId: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [coffeeId]: Math.max((prevCounts[coffeeId] || 0) - 1, 0),
    }))
  }

  const handleInputChange = (
    coffeeId: string,
    event: { target: { value: string } },
  ) => {
    const newCount = parseInt(event.target.value, 10)
    if (!isNaN(newCount)) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [coffeeId]: newCount,
      }))
    }
  }

  return (
    <div>
      {selectedCoffees.map((coffee) => (
        <div key={coffee.id} className="first:pt-6">
          <div className="flex items-center justify-around">
            <div className="size-16">
              <img src={coffee.img} alt={coffee.alt} />
            </div>
            <div>
              <p className="text-subtitle">{coffee.title}</p>
              <div className="flex items-center">
                <div className="bg-button p-1 rounded-lg flex mr-2">
                  <button
                    type="button"
                    onClick={() => handleDecreaseItem(coffee.id)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Minus color={isHovered ? '#4B2995' : '#8047F8'} />
                  </button>
                  <input
                    className="hide-number-controls bg-button text-center w-6 mx-1"
                    type="number"
                    placeholder="1"
                    value={counts[coffee.id]}
                    onChange={(event) => handleInputChange(coffee.id, event)}
                  />
                  <button
                    onClick={() => handleAddItem(coffee.id)}
                    type="button"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Plus color={isHovered ? '#4B2995' : '#8047F8'} />
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => onRemoveCoffee(coffee.id)}
                    className="flex items-center bg-button p-2 rounded-md hover:bg-hover focus:bg-purpleLight active:bg-purpleLight focus:outline-none focus:ring-1 focus:ring-purple"
                  >
                    <Trash color="#8047F8" />
                    <span className="ml-1 text-text uppercase text-sm md:text-md">
                      Remover
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-start">
              <p className="font-bold">R$ {coffee.price.toFixed(2)}</p>
            </div>
          </div>
          <hr className="bg-button mx-4 my-6" />
        </div>
      ))}
    </div>
  )
}
