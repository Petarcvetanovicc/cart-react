import { useSelector } from 'react-redux'
import { ShoppingCart } from '../assets/icons'
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart)
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="cart-icon-container">
          <ShoppingCart />
          <div className="a-container">{amount}</div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
