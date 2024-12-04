"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl">-</button>
            {quantity}
            <button className="cursor-pointer text-xl">+</button>
          </div>
        </div>
      </div>
      <button className="w-36 rounded-3xl ring-1 ring-pink text-pink py-2 px-4 hover:bg-pink hover:text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-white disabled:ring-none">
        Add to Basket
      </button>
    </div>
  );
};

export default Add;
