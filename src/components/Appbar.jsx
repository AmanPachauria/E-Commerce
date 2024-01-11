import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Appbar() {
  const totalItems = useSelector((state) => state.cart.totalItems);
  console.log("totalItem in appbar", totalItems);
  return (
    <header className="fixed top-0 w-full bg-blue-200 border-blue-400 text-blue-800 z-50 opacity-97">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto gap-1">
        <Link to="/" className="text-2xl font-bold text-blue-800">
          E-Commerce
        </Link>
        <ul className="flex gap-5 font-semibold items-center">
          <Link to="/shopping-cart" className="relative hover:underline">
            <div>
              <span className="mr-5">My Cart</span>
              {totalItems > 0 && (
                <span className="bg-green-500 mr-3 text-white px-2 py-1 rounded-full absolute -top-1 -right-7">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </ul>
      </div>
    </header>
  );
}
