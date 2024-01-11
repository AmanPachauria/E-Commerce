import { Link } from 'react-router-dom';

export default function Appbar() {
  return (
    <header className="fixed top-0 w-full bg-blue-200 border-b-2 border-blue-400 text-blue-800 z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-blue-800">
          E-Commerce
        </Link>
        <ul className="flex gap-5">
          <Link to="/shopping-cart" className="hover:underline text-blue-800">
            Your Cart
          </Link>
        </ul>
      </div>
    </header>
  );
}
