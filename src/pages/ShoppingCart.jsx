import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem";

export default function ShoppingCart() {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.products);

  console.log("cartItems in shoping list", cartItems);

  return (
    <div className="flex flex-col min-h-screen mt-20">
      <div className="flex flex-col p-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-between bg-gray-800 text-white p-4 fixed bottom-0 w-full">
        <div className="flex flex-col gap-3 items-center mx-auto">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ₹{(totalPrice).toLocaleString('en-US')}</p>
        </div>
        <Link to="/checkout" className="mx-auto">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 mt-2 rounded-lg transition-all duration-300 focus:outline-none focus:shadow-outline-blue font-semibold"
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}