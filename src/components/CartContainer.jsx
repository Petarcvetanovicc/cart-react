import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {
  const { amount, total, cart } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  if (amount < 1) {
    return (
      <section>
        <section className="cart-center">
          <h1>Your Bag</h1>
          <p>Is Currently Empty</p>
        </section>
      </section>
    )
  }

  return (
    <section>
      <section className="cart-center">
        <h1>Your Bag</h1>
        <div>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr />
          <p>
            Total <span>${total.toFixed(2)}</span>
          </p>
          <div style={{ textAlign: 'center' }}>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(openModal())}
            >
              Clear Cart
            </button>
          </div>
        </footer>
      </section>
    </section>
  )
}
export default CartContainer
