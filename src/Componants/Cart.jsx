import React from "react";
import { Link, useOutletContext } from "react-router";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const toggleSelect = (id) =>
    setCart(cart.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i)));
  const selectAll = () => setCart(cart.map((i) => ({ ...i, selected: true })));
  const unselectAll = () => setCart(cart.map((i) => ({ ...i, selected: false })));
  const removeSelected = () => setCart(cart.filter((i) => !i.selected));

  const increaseQty = (id) =>
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decreaseQty = (id) =>
    setCart(cart.map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i)));

  const selectedItems = cart.filter((i) => i.selected);
  const subtotal = selectedItems.reduce((sum, i) => sum + Number(i.price) * i.qty, 0);
  const oldTotal = selectedItems.reduce(
    (sum, i) => sum + (Number(i.oldPrice) || Number(i.price)) * i.qty,
    0
  );
  const discountTotal = oldTotal - subtotal;

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 font-bold mb-5">Your cart is empty</p>
          <Link to="/">
            <button className="bg-gray-500 text-white font-bold text-lg px-6 py-3 rounded-2xl hover:bg-gray-600 transition">
              Browse Campus-Mart
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-5 justify-center md:justify-start">
            <button
              onClick={selectAll}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Select All
            </button>
            <button
              onClick={unselectAll}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              Unselect All
            </button>
            <button
              onClick={removeSelected}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Remove Selected
            </button>
          </div>

          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm"
              >
                <div className="flex items-start md:items-center gap-3 w-full">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelect(item.id)}
                    className="mt-1 md:mt-0"
                  />

                  <div className="flex flex-col md:flex-row gap-4 w-full">
                    <img
                      src={item.cover}
                      alt={item.name}
                      className="h-40 w-full md:w-40 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      {item.publication && (
                        <p className="text-blue-400 text-sm">{item.publication}</p>
                      )}
                      <p className="mt-1">
                        Price: {item.price}৳ × {item.qty}
                      </p>
                      {item.oldPrice && (
                        <p className="line-through text-gray-400">Old: {item.oldPrice}৳</p>
                      )}
                      <p className="font-bold mt-1">Total: {item.price * item.qty}৳</p>
                    </div>
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center gap-2 mt-3 md:mt-0">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    –
                  </button>
                  <span className="text-lg font-bold">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setCart(cart.filter((b) => b.id !== item.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Billing Summary */}
          <div className="mt-8 p-6 border rounded-lg shadow-lg max-w-md mx-auto md:mx-0">
            <h2 className="text-xl font-bold mb-3">Billing Summary</h2>
            <p>
              Old Total: <span className="line-through">{oldTotal}৳</span>
            </p>
            <p className="text-green-600">Discount: -{discountTotal}৳</p>
            <p className="text-2xl font-bold mt-2">Final Total: {subtotal}৳</p>
            <Link to="/checkout">
              <button
                className="mt-4 bg-blue-600 text-white w-full py-2 rounded-lg text-lg hover:bg-blue-700 transition"
                disabled={selectedItems.length === 0}
              >
                Checkout Now
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
