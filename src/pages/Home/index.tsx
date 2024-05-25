import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import imagemCafe from '../../assets/imagem-cafe.png'
import { CoffeeCard, CoffeeType } from '../../components/Home/CoffeeCard'
import coffeesData from '../../assets/data/coffees.json'
import { v4 as uuidv4 } from 'uuid'

import {
  ShoppingCartSimple,
  Timer,
  Package,
  Coffee,
} from '@phosphor-icons/react'

interface OutletContextProps {
  addToCart: (count: number) => void
  totalItemCount: number
}

export function Home() {
  const { addToCart } = useOutletContext<OutletContextProps>()

  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    const coffeesWithId = coffeesData.map((coffee: Omit<CoffeeType, 'id'>) => ({
      ...coffee,
      id: uuidv4(),
    }))
    setCoffees(coffeesWithId)
  }, [])

  const handleAddToSelectedCoffees = (coffee: CoffeeType, count: number) => {
    const storedCoffees = localStorage.getItem('selectedCoffees')
    const updatedCoffees = storedCoffees ? JSON.parse(storedCoffees) : []

    const existingCoffeeIndex = updatedCoffees.findIndex(
      (c: CoffeeType) => c.id === coffee.id,
    )
    if (existingCoffeeIndex > -1) {
      updatedCoffees[existingCoffeeIndex].count += count
    } else {
      updatedCoffees.push({ ...coffee, count })
    }

    localStorage.setItem('selectedCoffees', JSON.stringify(updatedCoffees))
    setSelectedCoffees(updatedCoffees)
  }

  console.log({ selectedCoffees })

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
        <div className="mt-14 flex flex-wrap justify-center md:justify-start gap-10">
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                onAddToCart={(count) => {
                  addToCart(count)
                  handleAddToSelectedCoffees(coffee, count)
                }}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}
