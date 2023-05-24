import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let totalPrice = 0;
    products.forEach((item) => (totalPrice += item.quantity * item.price));
    return totalPrice.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51MtaO6SFKBgMNCPAl1GVD3X3DPWY4QvynA8BCIA2YwoQL8lvDM07N1DNjnxrjZgd3n3gVllEA3YVDiVOQjLQz04300gjL8h3rP"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      { products.length>0 ?
        <>
          <h1>Products in your cart</h1>
          {products.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0, 100)}</p>
                <div className="price">
                  Qty.{item.quantity} x ₹{item.price}
                </div>
                <DeleteOutlinedIcon
                  className="delete"
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </div>
            </div>
          ))}
          <div className="total">
            <span>Subtotal</span>
            <span>₹{totalPrice()}</span>
          </div>
          <button onClick={handlePayment}>Proceed to Checkout</button>
          <span className="reset" onClick={() => dispatch(resetCart())}>
            Reset Cart
          </span>
        </> : <h1 className="emptyCart">No items in the cart</h1>
      }
    </div>
  );
};

export default Cart;
