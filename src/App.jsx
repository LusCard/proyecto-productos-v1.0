import { products as initialProducts } from './mocks/products.json'
import { Products } from './Components/Products/Products.jsx'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { CartProvider } from './context/cart.jsx'
import { NavSide } from './Components/NavSide/NavSide'

export function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <div className='row text-white'>
        <NavSide/>
        <Products products={filteredProducts} />
      </div>
    </CartProvider>
  )
}

