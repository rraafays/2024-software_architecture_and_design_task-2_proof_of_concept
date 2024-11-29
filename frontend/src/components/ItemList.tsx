import Image from "next/image";
import Link from "next/link";

const ItemList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">20 GBP</span>
        </div>
        <div className="text-gray-500 text-sm">Description Text</div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md z-10 absolute object-cover hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="rounded-md absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">20 GBP</span>
        </div>
        <div className="text-gray-500 text-sm">Description Text</div>
        <button className="w-max rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white">
          Add to basket
        </button>
      </Link>
    </div>
  );
};

export default ItemList;
