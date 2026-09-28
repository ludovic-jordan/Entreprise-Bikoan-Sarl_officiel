import React, { useState } from "react";
import {
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaTrash,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

const PAYMENT_URL = "https://pay.fapshi.com/81483801";
const ShoppingCart: React.FC = () => {
  const { items, increase, decrease, remove, total, count } = useCart();
  const [open, setOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  if (!count) return null;
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Shopping cart"
        className="fixed right-5 bottom-20 z-40 bg-green-600 text-white rounded-full w-14 h-14 shadow-xl flex items-center justify-center hover:bg-green-700"
      >
        <FaShoppingCart />
        <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
          {count}
        </span>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex justify-end"
          onClick={() => setOpen(false)}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md h-full p-5 overflow-y-auto shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Shopping list
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 text-xl"
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-3 flex gap-3 items-center"
                >
                  <img
                    src={item.image}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-green-700 font-bold">
                      {item.price.toLocaleString()} FCFA
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decrease(item.id)}
                        className="border rounded p-1"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increase(item.id)}
                        className="border rounded p-1"
                      >
                        <FaPlus size={10} />
                      </button>
                      <button
                        onClick={() => remove(item.id)}
                        className="ml-auto text-red-600"
                      >
                        <FaTrash size={13} />
                      </button>
                    </div>
                  </div>
                  <p className="font-bold text-gray-700">
                    {(item.price * item.quantity).toLocaleString()} FCFA
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t mt-6 pt-4 flex justify-between text-xl font-bold">
              <span>Total à payer</span>
              <span className="text-green-700">
                {total.toLocaleString()} FCFA
              </span>
            </div>
            <button
              onClick={() => setPaymentOpen(true)}
              className="w-full text-center mt-5 bg-green-600 text-white font-bold rounded-xl py-3 hover:bg-green-700"
            >
              Payer maintenant
            </button>
          </aside>
        </div>
      )}
      {paymentOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4"
          onClick={() => setPaymentOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-2xl h-[85vh] overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h2 className="font-bold text-lg">Paiement sécurisé</h2>
                <p className="text-green-700 font-bold">
                  Total à payer : {total.toLocaleString()} FCFA
                </p>
              </div>
              <button
                onClick={() => setPaymentOpen(false)}
                className="text-gray-500 text-xl"
              >
                <FaTimes />
              </button>
            </div>
            <iframe
              title="Paiement Fapshi"
              src={PAYMENT_URL}
              className="w-full h-[calc(100%-76px)] border-0"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ShoppingCart;
