import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="bg-red-50 px-4 flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Sale on Video Games
          </h1>
          <button className="rounded-3xl bg-pink text-white w-max py-3 px-5 text-sm">
            Shop Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="woman" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
