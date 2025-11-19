import React from "react";
import { Link, useOutletContext } from "react-router";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  
  const toggleSelect = (id) =>
    setCart(
      cart.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i))
    );
  const selectAll = () => setCart(cart.map((i) => ({ ...i, selected: true })));
  const unselectAll = () =>
    setCart(cart.map((i) => ({ ...i, selected: false })));
  const removeSelected = () => setCart(cart.filter((i) => !i.selected));

  
  const increaseQty = (id) =>
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decreaseQty = (id) =>
    setCart(
      cart.map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i))
    );

  
  const selectedItems = cart.filter((i) => i.selected);
  const subtotal = selectedItems.reduce(
    (sum, i) => sum + Number(i.price) * i.qty,
    0
  );
  const oldTotal = selectedItems.reduce(
    (sum, i) => sum + (Number(i.oldPrice) || Number(i.price)) * i.qty,
    0
  );
  const discountTotal = oldTotal - subtotal;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <div className=" ">
          <p className="text-center text-gray-500 font-bold">
            Your cart is empty
          </p>
          <div className="text-center py-20">
            {" "}
            <Link to="/" className="">
              <button className="bg-gray-300 text-white/80 font-bold text-xl px-5 py-5 rounded-2xl border border-gray-500 cursor-pointer">
                Browser Campus-Mart
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
         
          <div className="flex flex-wrap gap-3 mb-5">
            <button
              onClick={selectAll}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Select All
            </button>
            <button
              onClick={unselectAll}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Unselect All
            </button>
            <button
              onClick={removeSelected}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove Selected
            </button>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-3 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="flex items-start md:items-center gap-3 w-full">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelect(item.id)}
                    className="mt-2 md:mt-0"
                  />

                  <div className="flex gap-4 w-full md:w-auto">
                    <img
                      src={item.cover}
                      alt=""
                      className="h-40 w-40 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold pt-1">{item.name}</h3>
                      <p className="text-blue-400">{item.publication || ""}</p>
                      <p>
                        Price: {item.price}BDT × {item.qty}
                      </p>
                      {item.oldPrice && (
                        <p className="line-through text-gray-500">
                          Old: {item.oldPrice}৳
                        </p>
                      )}
                      <p>Total: {item.price * item.qty}৳</p>
                    </div>
                  </div>
                </div>

                
                <div className="flex items-center gap-2 mt-3 md:mt-0">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    –
                  </button>
                  <span className="text-lg font-bold">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      setCart(cart.filter((b) => b.id !== item.id))
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          
          <div className="mt-6 p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Billing Summary</h2>
            <p className="text-lg">
              Old Total: <span className="line-through">{oldTotal}৳</span>
            </p>
            <p className="text-lg text-green-600">
              Discount: -{discountTotal}৳
            </p>
            <p className="text-2xl font-bold mt-2">Final Total: {subtotal}৳</p>
            <Link to="/chackout">
              {" "}
              <button
                className="mt-4 bg-blue-600 text-white w-full py-2 rounded-lg text-lg cursor-pointer"
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
