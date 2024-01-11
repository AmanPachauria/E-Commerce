import { useState } from 'react';
import { useSelector } from 'react-redux';
import PopupOrderSummary from '../components/PopupOrderSummary';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalItems = useSelector((state) => state.cart.totalItems);

  const [formData, setFormData] = useState({
    yourname: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-20">
      <h1 className='text-center text-3xl font-semibold my-8'>
        Your Details, Your Order: Secure Checkout
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleCheckout}>
        <input 
          type="text"
          placeholder="Your Name"
          id="yourname"
          className="border rounded-lg p-3 focus:outline-gray-800"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Address"
          id="address"
          className="border rounded-lg p-3 focus:outline-gray-800"
          onChange={handleInputChange}
        />
        <input 
          type="text"
          placeholder="Card Number"
          id="cardNumber"
          className="border rounded-lg p-3 focus:outline-gray-800"
          onChange={handleInputChange}
        />
        <div className="flex gap-3">
          <input 
            type="text"
            placeholder="MM/YY"
            id="expiry"
            className="border rounded-lg p-3 flex-1 focus:outline-gray-800"
            onChange={handleInputChange}
          />
          <input 
            type="text"
            placeholder="CVV"
            id="cvv"
            className="border rounded-lg p-3 w-1/4 focus:outline-gray-800"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white font-semibold p-3 mt-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
        >
          Confirm Order
        </button>
      </form>

      <PopupOrderSummary
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        formData={formData}
        cartItems={cartItems}
        totalPrice={totalPrice}
        totalItems={totalItems}
      />
    </div>
  );
}