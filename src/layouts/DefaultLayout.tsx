import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="md:container md:mx-auto mx-5">
      <Header />
      <Outlet />
    </div>
  )
}
