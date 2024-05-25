import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { useState } from 'react'

export function DefaultLayout() {
  const [totalItemCount, setTotalItemCount] = useState(0)

  const addToCart = (count: number) => {
    setTotalItemCount((prevCount) => prevCount + count)
  }
  return (
    <div className="md:container md:mx-auto mx-5">
      <Header totalItemCount={totalItemCount} />
      <Outlet context={{ addToCart, totalItemCount }} />
    </div>
  )
}
