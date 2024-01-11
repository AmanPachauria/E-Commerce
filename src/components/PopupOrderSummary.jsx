import Modal from 'react-modal';

const PopupOrderSummary = ({ isModalOpen, closeModal, formData, cartItems, totalPrice, totalItems }) => {
  return (
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
          Thank you, {formData.yourname}, for shopping with us! <br />
          Your order will be delivered to {formData.address} within 4 working days.
        </p>
        <p className="mt-2">
          <span className="font-semibold">Total Cost:</span> ₹{totalPrice.toFixed(2)}
          <span className="font-semibold ml-5">Total Items:</span> {totalItems}
        </p>
        <div className="flex flex-col mt-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <p className="truncate">{item.title}</p>
              <p className="ml-4">Quantity:{item.quantity}</p>
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
  );
};

export default PopupOrderSummary;