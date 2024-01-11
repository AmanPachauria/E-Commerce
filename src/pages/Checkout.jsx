import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

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
        Checkout
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
          className="bg-gray-800 text-white p-3 mt-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
        >
          Checkout
        </button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Order Summary"
        className="mt-20 p-6 bg-white rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-black opacity-95"
      >
        <div>
          <h1 className="text-2xl font-semibold mb-4">Order Confirmed!</h1>
          <p>
            Thank you, {formData.yourname}, for shopping with us! <br/>
            Your order will be delivered to {formData.address} within 4 working days.
          </p>
          <p className="mt-2">
            <span className="font-semibold">Total Cost:</span> ₹{totalPrice.toFixed(2)}
          </p>
          <div className="flex flex-col mt-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <p>{item.title}</p>
                <p className="ml-4">Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
          <button
            onClick={closeModal}
            className="bg-gray-800 text-white p-3 mt-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}