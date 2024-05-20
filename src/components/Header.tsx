import { NavLink } from 'react-router-dom'
import coffeLogo from '../assets/logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'

export function Header() {
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
            <span className="text-purpleDark ml-1">Porte Alegre, RS</span>
          </button>
        </div>
        <NavLink to="/shopping-cart">
          <button className="p-2 bg-yellowLight rounded-lg">
            <ShoppingCartSimple size={22} color="#C47F17" weight="fill" />
          </button>
        </NavLink>
      </div>
    </header>
  )
}
