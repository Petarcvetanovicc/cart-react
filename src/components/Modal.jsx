import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'

const Modal = () => {
  const dispetch = useDispatch()
  return (
    <section className="modal-overlay">
      <div className="modal-containerr">
        <h4>Remove All Items From Your Shopping Cart?</h4>
        <div className="btns-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispetch(clearCart())
              dispetch(closeModal())
            }}
          >
            CONFIRM
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispetch(closeModal())}
          >
            CANCEL
          </button>
        </div>
      </div>
    </section>
  )
}
export default Modal
