import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { calculateTotals, getProductItems } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const { cart, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cart])
  useEffect(() => {
    dispatch(getProductItems())
  }, [])

  if (isLoading) {
    return (
      <main>
        <div>
          <h2 style={{ textAlign: 'center', marginTop: '6rem' }}>Loading...</h2>
        </div>
      </main>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
