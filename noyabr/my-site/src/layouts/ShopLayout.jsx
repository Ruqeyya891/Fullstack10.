import { Outlet } from 'react-router'
import ShopHeader from '../components/ShopHeader'
import Footer from '../components/Footer'

export default function ShopLayout() {
  return (
    <>
      <ShopHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}