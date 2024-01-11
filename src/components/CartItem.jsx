import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/product/productSlice';
import { Link } from 'react-router-dom';
export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleIncreaseQuantity = () => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = () => {
    dispatch(removeFromCart(item.id));
  };
    return (
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
        <Link to={`/product-details/${item.id}`}>
          <img 
            src={item.image}
            alt="Product img"
            className="h-20 w-20 object-contain text-black"
          />
          </Link>
          <div>
            <p className="font-semibold">{item.title}</p>
            <p>Price / Unit: ₹{(item.price * 100).toLocaleString('en-US')}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
             onClick={() => handleDecreaseQuantity()}
            className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full"
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => handleIncreaseQuantity()}
            className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full"
          >
            +
          </button>
        </div>
      </div>
    )
  }