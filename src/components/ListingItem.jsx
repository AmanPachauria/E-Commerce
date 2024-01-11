import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/product/productSlice.js";

export default function ListingItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("product befor dispatch",product);
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white mt-5 shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <img
        src={
          product.image ||
          "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1669124939/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262565_0_gsz0tr.png"
        }
        alt="product image"
        className="h-[320px] sm:h-[220px] w-full object-contain hover:scale-105 transition-scale duration-300"
      />
      <div className="p-3 flex flex-col gap-2 w-full">
        <p className="text-lg font-semibold text-slate-700">
          {product.title}
        </p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <p className="text-slate-500 mt-2 font-semibold">
          ₹{(product.price * 100).toLocaleString("en-US")}
        </p>
        <div className="flex justify-between items-center">
          <Link to="">
            <button
              onClick={handleAddToCart}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
            >
              Add to Cart
            </button>
          </Link>
          <div className="flex items-center gap-2">
            { product.rating.rate <= 2.5 ? <span className="text-red-400">Rating</span> : <span className="text-green-700">Rating</span> }
            <span className="text-gray-500">{product.rating.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
