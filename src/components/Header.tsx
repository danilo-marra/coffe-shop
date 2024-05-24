import { NavLink } from 'react-router-dom'
import coffeLogo from '../assets/logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'

interface HeaderProps {
  totalItemCount: number
  selectedCoffeeCount: number
}

export function Header({ totalItemCount, selectedCoffeeCount }: HeaderProps) {
  return (
    <header className="flex justify-between items-center  mt-10 mb-20">
      <NavLink to="/">
        <button>
          <img src={coffeLogo} alt="logo coffe-shop" className="w-24" />
        </button>
      </NavLink>
      <div className="flex items-center">
        <div className="mr-3">
          <button className="p-2 bg-purpleLight flex items-center rounded-lg">
            <MapPin size={22} color="#8047f8" weight="fill" />
            <span className="text-purpleDark ml-1">Porto Alegre, RS</span>
          </button>
        </div>
        <NavLink to="/shopping-cart" className="relative inline-block">
          <button className="p-2 bg-yellowLight rounded-lg relative">
            <ShoppingCartSimple size={22} color="#C47F17" weight="fill" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-yellowDark rounded-full">
              {totalItemCount + selectedCoffeeCount}
            </span>
          </button>
        </NavLink>
      </div>
    </header>
  )
}
