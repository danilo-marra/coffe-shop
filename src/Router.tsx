import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  )
}
