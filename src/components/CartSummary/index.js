import CartContext from '../../context/CartContext'
import './index.css'

// Write your code here
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">Order Total: Rs {total}/-</h1>
          <p>{cartList.length} items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
