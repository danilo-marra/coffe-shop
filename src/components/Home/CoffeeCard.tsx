import { CoffeeCounter } from './CoffeeCounter'

export interface CoffeeType {
  id: string
  img: string
  alt: string
  tags: Array<string>
  title: string
  description: string
  price: number
  count: number
}

interface CoffeeCardProps {
  coffee: CoffeeType
  onAddToCart: (count: number) => void
}

export function CoffeeCard({ coffee, onAddToCart }: CoffeeCardProps) {
  return (
    <div className="bg-card relative w-[18rem] rounded-tr-3xl rounded-bl-3xl py-5">
      <div className="text-center absolute w-full -top-[1.5rem] flex justify-center">
        <img className="mx-auto" src={coffee.img} alt={coffee.alt} />
      </div>
      <div className="text-center mt-24">
        <div className="my-6">
          {coffee.tags.map((coffeeTag) => {
            return (
              <span
                key={coffeeTag}
                className="text-yellowDark bg-yellowLight p-2 uppercase font-bold text-sm rounded-xl mx-2"
              >
                {coffeeTag}
              </span>
            )
          })}
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-baloo2 text-subtitle text-2xl px-2">
          {coffee.title}
        </h3>
        <p className="text-label px-2 mt-5 mb-10">{coffee.description}</p>
      </div>
      <CoffeeCounter
        onAddToCart={onAddToCart}
        value={coffee.price}
        count={coffee.count}
      />
    </div>
  )
}
