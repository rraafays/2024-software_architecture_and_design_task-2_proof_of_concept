import Filter from "@/components/Filter";
import ItemList from "@/components/ItemList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="hidden sm:flex bg-pink-200 px-4 justify-between h-64 rounded-lg">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            New Video Games Added
          </h1>
          <button className="rounded-3xl bg-aml text-white w-max py-3 px-5 text-sm">
            Browse Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/catherine.png"
            alt="woman"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <Filter />
      <h1 className="mt-12 text-xl font-semibold mb-12">Results</h1>
      <ItemList />
    </div>
  );
};

export default ListPage;
