import { useDispatch } from 'react-redux'
import { ChevronUp, ChevronDown } from '../assets/icons'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'

const CartItem = ({ img, title, price, amount, id }) => {
  const dispatch = useDispatch()
  return (
    <article className="single-cart-item">
      <img src={img} alt={title} />
      <div className="info">
        <h4>{title}</h4>
        <p>${price}</p>
        <button onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div className="amount-btns">
        <button onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id))
              return
            }
            dispatch(decrease(id))
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}
export default CartItem
