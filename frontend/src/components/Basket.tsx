"use client";

import Image from "next/image";
import { useState } from "react";

const Basket = () => {
  const [items, setItems] = useState(true);

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 w-max">
      {!items ? (
        <div>cart is empty</div>
      ) : (
        <>
          <h2 className="text-xl">Basket</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={
                  "https://assets-prd.ignimgs.com/2022/01/07/gta-san-andreas-collage-button2-1641589094079.jpg"
                }
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">
                      Grand Theft Auto: San Andreas
                    </h3>
                    <div className="p-1 bg-gray-50 rounded-sm">Available</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">qty 2</span>
                    <span className="text-red-500">remove</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white"
                onClick={() => setItems((prev) => !prev)}
              >
                Borrow
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
