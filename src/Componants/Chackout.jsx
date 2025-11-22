import React from "react";
import { useOutletContext, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

export default function Chackout() {
  const { cart, setCart } = useOutletContext();
  const navigate = useNavigate();

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
  const delivery = 60;
  const total = subtotal + delivery;

  const handlePlaceOrder = () => {
  if (selectedItems.length === 0) {
    toast.error("No items selected!");
    return;
  }

  
  toast.success("Order placed successfully!", {
    duration: 3000,
    position: "top-right",
    icon: "✅",
    style: { borderRadius: "10px", background: "#333", color: "#fff" },
  });

  setTimeout(() => {
    setCart([]);
    navigate("/"); 
  }, 5000);
};

  return (
    <div className="p-5 max-w-5xl mx-auto">
      <Toaster /> 
      <div className="flex justify-center mb-6">
        <img src="/campus-logo.png" alt="Campus Mart" className="h-16" />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div className="border rounded-xl shadow-lg p-6 bg-white">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 p-2 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.cover}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>
              </div>
              <div className="font-bold">{item.price * item.qty} TK</div>
            </div>
          ))}

          <hr className="my-3" />
          <p>Subtotal: <span className="font-bold">{subtotal} TK</span></p>
          <p>Delivery: <span className="font-bold">{delivery} TK</span></p>
          <p>Discount: <span className="text-green-600">{discountTotal} TK</span></p>
          <p className="text-2xl font-bold mt-3">Total: {total} TK</p>
        </div>

        
        <div className="border rounded-xl shadow-lg p-6 bg-white">
          <h2 className="text-xl font-bold mb-4">Billing & Payment</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePlaceOrder();
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Address"
              required
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="City"
              required
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="Phone"
              required
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="cash">Cash on Delivery</option>
              <option value="bkash">bKash</option>
              <option value="card">Card Payment</option>
            </select>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
