"use client";

import { useState } from "react";

export default function FoodItemCardEn() {
  const [quantity, setQuantity] = useState(1);
  const [selectedWithout, setSelectedWithout] = useState<string[]>([]);

  const withoutOptions = ["Fried Onions", "Tomatoes", "Raita", "Ginger"];

  const toggleOption = (item: string) => {
    setSelectedWithout((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 max-w-md w-full border border-gray-100">
      {/* Product name */}
      <h2 className="text-xl font-semibold text-gray-900">Vegetable Biryani</h2>

      {/* Description */}
      <p className="mt-1 text-sm text-gray-700 leading-snug">
        Fried Basmati rice, bell pepper, green beans, carrots, cauliflower,
        roasted onions, tomatoes, raita, ginger.
      </p>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-gray-400 line-through text-sm">€17.90</span>
        <span className="text-lg font-semibold text-gray-800">€17.01</span>
      </div>

      <hr className="my-4" />

      {/* Without section */}
      <h3 className="text-base font-semibold text-gray-800 mb-2">Without</h3>
      <div className="flex flex-col gap-2">
        {withoutOptions.map((item) => (
          <label
            key={item}
            className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedWithout.includes(item)}
              onChange={() => toggleOption(item)}
              className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
            />
            {item}
          </label>
        ))}
      </div>

      <hr className="my-4" />

      {/* Quantity */}
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-800">Quantity:</span>
        <div className="flex items-center gap-3">
          <button
            onClick={decreaseQty}
            className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-lg"
          >
            –
          </button>
          <span className="text-gray-800 font-semibold">x{quantity}</span>
          <button
            onClick={increaseQty}
            className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-lg"
          >
            +
          </button>
        </div>
      </div>

      <hr className="my-4" />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="w-full py-2 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition">
          CANCEL
        </button>
        <button className="w-full py-2 bg-amber-800 text-white font-semibold rounded-lg hover:bg-amber-900 transition">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
