import React from 'react';

export default function Checkout() {
  return (
    <div className="p-6 max-w-lg mx-auto mt-20 bg-gray-100 rounded-lg shadow-md">
      <h1 className='text-center text-3xl font-semibold my-8 text-gray-800'>Checkout</h1>
      <form className="flex flex-col gap-5">
        <input 
          type="text"
          placeholder="Your Name"
          id="yourname"
          className="border rounded-lg p-3 focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Address"
          id="address"
          className="border rounded-lg p-3 focus:outline-none focus:border-blue-500"
        />
        <input 
          type="text"
          placeholder="Card Number"
          id="cardNumber"
          className="border rounded-lg p-3 focus:outline-none focus:border-blue-500"
        />
        <div className="flex gap-3">
          <input 
            type="text"
            placeholder="MM/YY"
            id="expiry"
            className=" border rounded-lg p-3 flex-1 focus:outline-none focus:border-blue-500"
          />
          <input 
            type="text"
            placeholder="CVC"
            id="cvc"
            className="border rounded-lg p-3 w-1/3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          className="bg-blue-500 text-white p-3 mt-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Checkout
        </button>
      </form>
    </div>
  );
}
