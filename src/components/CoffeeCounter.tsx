import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useState } from 'react'

interface CoffeeCounterProps {
  value: number
  onAddToCart: (count: number) => void
}

export function CoffeeCounter({ value, onAddToCart }: CoffeeCounterProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [count, setCount] = useState(0)

  const formatPriceToBrl = (value: number) => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  function handleAddItem() {
    setCount((count) => count + 1)
  }

  function handleDecreaseItem() {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  function handleInputChange(event: { target: { value: string } }) {
    const newCount = parseInt(event.target.value, 10)
    if (!isNaN(newCount) && newCount >= 0) {
      setCount(newCount)
    }
  }

  function handleAddShoppingCart() {
    const total = value * count
    console.log(
      `Esse café custa ${value}. Você Adicionou ${count} items no carrinho o total agora é ${total}`,
    )
    onAddToCart(count)
  }

  return (
    <div className="px-4 flex items-center justify-around">
      <div>
        <p className="text-subtitle text-sm">
          R$
          <span className="font-baloo2 text-3xl ml-1">
            {formatPriceToBrl(value)}
          </span>
        </p>
      </div>
      <div className="bg-button p-2 rounded-lg flex">
        <button
          onClick={handleDecreaseItem}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Minus color={isHovered ? '#4B2995' : '#8047F8'} />
        </button>
        <input
          className="w-6 mx-1 bg-button text-center text-subtitle font-bold hide-number-controls"
          type="number"
          value={count}
          onChange={handleInputChange}
        />
        <button
          onClick={handleAddItem}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Plus color={isHovered ? '#4B2995' : '#8047F8'} />
        </button>
      </div>
      <div>
        <button
          className="bg-purpleDark p-2 rounded-lg hover:bg-purple"
          onClick={handleAddShoppingCart}
        >
          <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
        </button>
      </div>
    </div>
  )
}
